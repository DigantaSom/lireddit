import { Box } from '@chakra-ui/layout';

export type WrapperVariant = 'regular' | 'small';

interface WrapperProps {
  variant?: WrapperVariant;
}

const Wrapper: React.FC<WrapperProps> = ({ variant, children }) => {
  return (
    <Box maxW={variant === 'small' ? '400px' : '800px'} mx='auto'>
      {children}
    </Box>
  );
};

export default Wrapper;
