import { Button } from '@chakra-ui/button';
import { Box, Flex, Heading, Stack, Text } from '@chakra-ui/layout';
import Layout from '../components/Layout';
import UpdootSection from '../components/UpdootSection';
import { usePostsQuery } from '../generated/graphql';
import { withApollo } from '../utils/withApollo';

const Index = () => {
  const { data, loading, error, fetchMore, variables } = usePostsQuery({
    variables: {
      limit: 10,
      cursor: null,
    },
  });

  if (loading && !data) {
    <Layout>
      <Box>Loading posts...</Box>
    </Layout>;
  }
  if (!loading && !data) {
    <Layout>
      <Box>Something went wrong...</Box>
      <Box>{error?.message}</Box>
    </Layout>;
  }

  return (
    <Layout>
      <Stack spacing={8}>
        {data?.posts.posts.map(p => (
          <Flex key={p.id} p={5} shadow='md' borderWidth='1px' alignItems='center'>
            <UpdootSection post={p} />
            <Box ml={6}>
              <Heading fontSize='xl'>{p.title}</Heading>
              <Text mt={4}>{p.textSnippet}</Text>
            </Box>
          </Flex>
        ))}
      </Stack>
      {data?.posts.hasMore && (
        <Flex my={6} justifyContent='center'>
          <Button
            isLoading={loading}
            colorScheme='teal'
            onClick={() => {
              fetchMore({
                variables: {
                  limit: variables?.limit,
                  cursor: data.posts.posts[data.posts.posts.length - 1].createdAt,
                },
              });
            }}>
            Load more
          </Button>
        </Flex>
      )}
    </Layout>
  );
};

export default withApollo({ ssr: true })(Index);
