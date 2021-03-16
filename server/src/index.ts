import { createConnection } from 'typeorm';
import { User } from './entities/User';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { Post } from './entities/Post';
import { PostResolver } from './resolvers/posts';
import { UserResolver } from './resolvers/user';

const main = async () => {
  await createConnection({
    type: 'postgres',
    username: 'postgres',
    password: 'postgresadmin',
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
