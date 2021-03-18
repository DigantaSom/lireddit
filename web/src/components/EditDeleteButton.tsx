import { IconButton } from '@chakra-ui/button';
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { Flex, Link } from '@chakra-ui/layout';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useDeletePostMutation, useMeQuery } from '../generated/graphql';

interface EditDeleteButtonProps {
  postId: number;
  creatorId: number;
  singlePostPage?: boolean;
}

const EditDeleteButton: React.FC<EditDeleteButtonProps> = ({
  postId,
  creatorId,
  singlePostPage,
}) => {
  const { data: meData } = useMeQuery();
  const [deletePost] = useDeletePostMutation();
  const router = useRouter();

  if (meData?.me?.id !== creatorId) {
    return null;
  }

  return (
    <Flex flexDirection={singlePostPage ? 'row' : 'column'}>
      <NextLink
        href={{
          pathname: '/post/edit/[id]',
          query: { id: postId },
        }}>
        <IconButton as={Link} aria-label='Edit post' mb={2} icon={<EditIcon />} />
      </NextLink>
      <IconButton
        aria-label='Edit post'
        icon={<DeleteIcon />}
        onClick={() => {
          deletePost({
            variables: {
              id: postId,
            },
            update: cache => {
              cache.evict({ id: 'Post:' + postId });

              if (singlePostPage) {
                router.replace('/');
              }
            },
          });
        }}
      />
    </Flex>
  );
};

export default EditDeleteButton;
