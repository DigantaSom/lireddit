import { IconButton } from '@chakra-ui/button';
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { Flex, Link } from '@chakra-ui/layout';
import { useDeletePostMutation, useMeQuery } from '../generated/graphql';
import NextLink from 'next/link';

interface EditDeleteButtonProps {
  postId: number;
  creatorId: number;
}

const EditDeleteButton: React.FC<EditDeleteButtonProps> = ({ postId, creatorId }) => {
  const { data: meData } = useMeQuery();
  const [deletePost] = useDeletePostMutation();

  if (meData?.me?.id !== creatorId) {
    return null;
  }

  return (
    <Flex flexDirection='column'>
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
            },
          });
        }}
      />
    </Flex>
  );
};

export default EditDeleteButton;
