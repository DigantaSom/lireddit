import { ApolloServer } from 'apollo-server-express';
import config from 'config';
import connectRedis from 'connect-redis';
import cors from 'cors';
import express from 'express';
import session from 'express-session';
import Redis from 'ioredis';
import path from 'path';
import { buildSchema } from 'type-graphql';
import { createConnection } from 'typeorm';
import { COOKIE_NAME, __prod__ } from './constants';
import { Post } from './entities/Post';
import { Updoot } from './entities/Updoots';
import { User } from './entities/User';
import { PostResolver } from './resolvers/posts';
import { UserResolver } from './resolvers/user';
import { MyContext } from './types';
import { createUpdootLoader } from './utils/createUpdootLoader';
import { createUserLoader } from './utils/createUserLoader';

const main = async () => {
  const conn = await createConnection({
    type: 'postgres',
    username: config.get('DB_USERNAME') as string,
    password: config.get('DB_PASSWORD') as string,
    database: config.get('DB_NAME') as string,
    logging: true,
    synchronize: true,
    entities: [User, Post, Updoot],
    migrations: [path.join(__dirname, './migrations/*')],
  });

  await conn.runMigrations();

  const app = express();

  app.use(
    cors({
      origin: 'http://localhost:3000',
      credentials: true,
    })
  );

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
    context: ({ req, res }): MyContext => ({
      req,
      res,
      redis,
      userLoader: createUserLoader(),
      updootLoader: createUpdootLoader(),
    }),
  });

  apolloServer.applyMiddleware({ app, cors: false });

  app.listen(4000, () => {
    console.log('GraphQL server started at http://localhost:4000/graphql');
  });
};

main().catch(err => {
  console.log('Main error:', err);
});
