import { withApollo as createWithApollo } from 'next-apollo';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { PaginatedPosts } from '../generated/graphql';

const createClient = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  credentials: 'include',
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
