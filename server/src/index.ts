import { ApolloServer } from 'apollo-server-express';
import config from 'config';
import connectRedis from 'connect-redis';
import express from 'express';
import session from 'express-session';
import Redis from 'ioredis';
import { buildSchema } from 'type-graphql';
import { createConnection } from 'typeorm';
import { COOKIE_NAME, __prod__ } from './constants';
import { Post } from './entities/Post';
import { User } from './entities/User';
import { PostResolver } from './resolvers/posts';
import { UserResolver } from './resolvers/user';
import { MyContext } from './types';

const main = async () => {
  await createConnection({
    type: 'postgres',
    username: config.get('DB_USERNAME') as string,
    password: config.get('DB_PASSWORD') as string,
    database: 'zz_prac_db',
    logging: true,
    synchronize: true,
    entities: [User, Post],
  });

  const app = express();

  const redis = new Redis();
  const RedisStore = connectRedis(session);

  app.use(
    session({
      name: COOKIE_NAME,
      store: new RedisStore({
        client: redis,
        disableTouch: true,
      }),
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365 * 10, // 10 years
        httpOnly: true,
        sameSite: 'lax',
        secure: __prod__,
      },
      saveUninitialized: false,
      secret: config.get('REDIS_SECRET'),
      resave: false,
    })
  );

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [PostResolver, UserResolver],
      validate: false,
    }),
    context: ({ req, res }): MyContext => ({ req, res }),
  });

  apolloServer.applyMiddleware({ app });

  app.listen(4000, () => {
    console.log('GraphQL server started at http://localhost:4000/graphql');
  });
};

main().catch(err => {
  console.log('Main error:', err);
});
