import { ApolloServer } from 'apollo-server-express';
import config from 'config';
import express from 'express';
import { buildSchema } from 'type-graphql';
import { createConnection } from 'typeorm';
import { Post } from './entities/Post';
import { User } from './entities/User';
import { PostResolver } from './resolvers/posts';
import { UserResolver } from './resolvers/user';

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

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [PostResolver, UserResolver],
      validate: false,
    }),
  });

  apolloServer.applyMiddleware({ app });

  app.listen(4000, () => {
    console.log('GraphQL server started at http://localhost:4000/graphql');
  });
};

main().catch(err => {
  console.log('Main error:', err);
});
