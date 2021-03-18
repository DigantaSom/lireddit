import { ApolloCache, gql } from '@apollo/client';
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { Box, Flex } from '@chakra-ui/layout';
import { IconButton } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { PostSnippetFragment, useVoteMutation, VoteMutation } from '../generated/graphql';

interface UpdootSectionProps {
  // post: PostsQuery['posts']['posts'][0];
  post: PostSnippetFragment;
}

const updateCacheAfterVote = (
  cache: ApolloCache<VoteMutation>,
  postId: number,
  value: number
) => {
  const data = cache.readFragment<{
    id: number;
    points: number;
    voteStatus: number;
  }>({
    id: 'Post:' + postId,
    fragment: gql`
      fragment _ on Post {
        id
        points
        voteStatus
      }
    `,
  });
  if (data) {
    if (data.voteStatus === value) {
      return;
    }
    const newPoints = (data.points as number) + (data.voteStatus ? 2 : 1) * value;
    cache.writeFragment<{
      points: number;
      voteStatus: number;
    }>({
      id: 'Post:' + postId,
      fragment: gql`
        fragment __ on Post {
          points
          voteStatus
        }
      `,
      data: {
        points: newPoints,
        voteStatus: value,
      },
    });
  }
};

const UpdootSection: React.FC<UpdootSectionProps> = ({ post }) => {
  const [vote, { error }] = useVoteMutation();

  const router = useRouter();

  if (error?.graphQLErrors[0].message.toLowerCase().includes('not authenticated')) {
    router.push('/login');
  }

  const [loadingState, setLoadingState] = useState<
    'updoot-loading' | 'downdoot-loading' | 'not-loading'
  >('not-loading');

  return (
    <Flex flexDirection='column' alignItems='center'>
      <IconButton
        aria-label='Updoot'
        icon={<ChevronUpIcon />}
        onClick={async () => {
          if (post.voteStatus === 1) {
            return;
          }
          setLoadingState('updoot-loading');
          await vote({
            variables: {
              postId: post.id,
              value: 1,
            },
            update: cache => updateCacheAfterVote(cache, post.id, 1),
          });
          setLoadingState('not-loading');
        }}
        isLoading={loadingState === 'updoot-loading'}
        colorScheme={post.voteStatus === 1 ? 'orange' : undefined}
      />
      <Box my={2}>{post.points}</Box>
      <IconButton
        aria-label='Downdoot'
        icon={<ChevronDownIcon />}
        onClick={async () => {
          if (post.voteStatus === -1) {
            return;
          }
          setLoadingState('downdoot-loading');
          await vote({
            variables: {
              postId: post.id,
              value: -1,
            },
            update: cache => updateCacheAfterVote(cache, post.id, -1),
          });
          setLoadingState('not-loading');
        }}
        isLoading={loadingState === 'downdoot-loading'}
        colorScheme={post.voteStatus === -1 ? 'blue' : undefined}
      />
    </Flex>
  );
};

export default UpdootSection;
