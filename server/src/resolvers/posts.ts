import {
  Arg,
  Ctx,
  Field,
  FieldResolver,
  InputType,
  Int,
  Mutation,
  Query,
  Resolver,
  Root,
  UseMiddleware,
} from 'type-graphql';
import { getConnection } from 'typeorm';
import { Post } from '../entities/Post';
import { isAuth } from '../middleware/isAuth';
import { MyContext } from '../types';

@InputType()
class PostInput {
  @Field()
  title: string;
  @Field()
  text: string;
}

@Resolver(Post)
export class PostResolver {
  @FieldResolver(() => String)
  textSnippet(@Root() post: Post) {
    return post.text.slice(0, 50);
  }

  @Query(() => [Post])
  posts() {
    return Post.find();
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
}
