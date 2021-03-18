import { IconButton } from '@chakra-ui/button';
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { Flex } from '@chakra-ui/layout';

const EditDeleteButton = () => {
  return (
    <Flex flexDirection='column'>
      <IconButton aria-label='Edit post' mb={2} icon={<EditIcon />} onClick={() => {}} />
      <IconButton aria-label='Edit post' icon={<DeleteIcon />} onClick={() => {}} />
    </Flex>
  );
};

export default EditDeleteButton;
