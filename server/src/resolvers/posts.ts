import {
  Arg,
  Ctx,
  Field,
  FieldResolver,
  InputType,
  Int,
  Mutation,
  ObjectType,
  Query,
  Resolver,
  Root,
  UseMiddleware,
} from 'type-graphql';
import { getConnection } from 'typeorm';
import { Post } from '../entities/Post';
import { Updoot } from '../entities/Updoots';
import { User } from '../entities/User';
import { isAuth } from '../middleware/isAuth';
import { MyContext } from '../types';

@InputType()
class PostInput {
  @Field()
  title: string;
  @Field()
  text: string;
}

@ObjectType()
class PaginatedPosts {
  @Field(() => [Post])
  posts: Post[];
  @Field()
  hasMore: boolean;
}

@Resolver(Post)
export class PostResolver {
  @FieldResolver(() => String)
  textSnippet(@Root() post: Post) {
    return post.text.slice(0, 50);
  }

  @FieldResolver(() => User)
  creator(@Root() post: Post, @Ctx() { userLoader }: MyContext): Promise<User> {
    return userLoader.load(post.creatorId);
  }

  @FieldResolver(() => Int, { nullable: true })
  async voteStatus(@Root() post: Post, @Ctx() { req, updootLoader }: MyContext) {
    if (!req.session.userId) {
      return null;
    }
    const updoot = await updootLoader.load({
      userId: req.session.userId,
      postId: post.id,
    });
    return updoot ? updoot.value : null;
  }

  @Query(() => PaginatedPosts)
  async posts(
    @Arg('limit', () => Int) limit: number,
    @Arg('cursor', () => String, { nullable: true }) cursor: string
  ) {
    const realLimit = Math.min(limit, 50);
    const realLimitPlusOne = realLimit + 1;

    const replacements: any[] = [realLimitPlusOne];

    if (cursor) {
      replacements.push(new Date(parseInt(cursor)));
    }

    const posts = await getConnection().query(
      `
      SELECT * FROM post
      ${cursor ? `WHERE $2 > "createdAt"` : ''}
      ORDER BY "createdAt" DESC
      LIMIT $1
    `,
      replacements
    );

    return {
      posts: posts.slice(0, realLimit),
      hasMore: posts.length === realLimitPlusOne,
    };
  }

  @Query(() => Post, { nullable: true })
  post(@Arg('id', () => Int) id: number): Promise<Post | undefined> {
    return Post.findOne(id);
  }

  @Mutation(() => Post)
  @UseMiddleware(isAuth)
  createPost(@Arg('input') input: PostInput, @Ctx() { req }: MyContext): Promise<Post> {
    return Post.create({
      ...input,
      creatorId: req.session.userId,
    }).save();
  }

  @Mutation(() => Post, { nullable: true })
  @UseMiddleware(isAuth)
  async updatePost(
    @Arg('id', () => Int) id: number,
    @Arg('input') input: PostInput,
    @Ctx() { req }: MyContext
  ): Promise<Post | null> {
    const result = await getConnection()
      .createQueryBuilder()
      .update(Post)
      .set({ ...input })
      .where('id = :id AND "creatorId" = :creatorId', {
        id,
        creatorId: req.session.userId,
      })
      .returning('*')
      .execute();

    return result.raw[0];
  }

  @Mutation(() => Boolean)
  @UseMiddleware(isAuth)
  async deletePost(@Arg('id', () => Int) id: number, @Ctx() { req }: MyContext) {
    await Post.delete({ id, creatorId: req.session.userId });
    return true;
  }

  @Mutation(() => Boolean)
  @UseMiddleware(isAuth)
  async vote(
    @Arg('postId', () => Int) postId: number,
    @Arg('value', () => Int) value: number,
    @Ctx() { req }: MyContext
  ) {
    const isUpdoot = value !== -1;
    const realValue = isUpdoot ? 1 : -1;

    const { userId } = req.session;

    const updoot = await Updoot.findOne({ where: { userId, postId } });

    // if the user has already voted on the post before, and they want to change their vote
    if (updoot && updoot.value !== realValue) {
      await getConnection().transaction(async tm => {
        await tm.query(
          `
          UPDATE updoot
          SET value = $1
          WHERE "userId" = $2 AND "postId" = $3
        `,
          [realValue, userId, postId]
        );
        await tm.query(
          `
          UPDATE post
          SET points = points + $1
          WHERE id = $2
        `,
          [2 * realValue, postId]
        );
      });
    } else if (!updoot) {
      // if the user is voting on the post for the first time
      await getConnection().transaction(async tm => {
        await tm.query(
          `
          INSERT INTO updoot ("userId", "postId", value)
          VALUES ($1, $2, $3)
        `,
          [userId, postId, realValue]
        );
        await tm.query(
          `
          UPDATE post
          SET points = points + $1
          WHERE id = $2
        `,
          [realValue, postId]
        );
      });
    }

    return true;
  }
}
