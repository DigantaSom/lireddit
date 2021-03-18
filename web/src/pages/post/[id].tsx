import { Box, Heading } from '@chakra-ui/layout';
import EditDeleteButton from '../../components/EditDeleteButton';
import Layout from '../../components/Layout';
import { usePostQuery } from '../../generated/graphql';
import { useGetIntId } from '../../utils/useGetIntId';
import { withApollo } from '../../utils/withApollo';

const Post = () => {
  const postId = useGetIntId();

  const { data, loading, error } = usePostQuery({
    variables: {
      id: postId,
    },
    skip: postId === -1,
  });

  if (loading) {
    return (
      <Layout>
        <Box>Loading...</Box>
      </Layout>
    );
  }

  if (!data?.post) {
    return (
      <Layout>
        <Box>could not find post</Box>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <Box>{error.message}</Box>
      </Layout>
    );
  }

  return (
    <Layout>
      <Heading mb={4}>{data.post.title}</Heading>
      <Box mb={4}>{data.post.text}</Box>
      <EditDeleteButton postId={postId} creatorId={data.post.creator.id} singlePostPage />
    </Layout>
  );
};

export default withApollo({ ssr: true })(Post);
