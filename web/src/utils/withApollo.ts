import createWithApollo from './createWithApollo';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { NextPageContext } from 'next';
import { PaginatedPosts } from '../generated/graphql';
import { isServer } from './isServer';

const createClient = (ctx: NextPageContext | undefined) =>
  new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    credentials: 'include',
    headers: {
      cookie: isServer() ? ctx?.req?.headers.cookie || '' : '',
    },
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            posts: {
              keyArgs: [],
              merge(
                existing: PaginatedPosts | undefined,
                incoming: PaginatedPosts
              ): PaginatedPosts {
                // console.log(existing, incoming);
                return {
                  __typename: 'PaginatedPosts',
                  hasMore: incoming.hasMore,
                  posts: [...(existing?.posts || []), ...incoming.posts],
                };
              },
            },
          },
        },
      },
    }),
  });

export const withApollo = createWithApollo(createClient);
