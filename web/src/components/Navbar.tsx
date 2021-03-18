import { useApolloClient } from '@apollo/client';
import { Button } from '@chakra-ui/button';
import { Box, Flex, Heading, Link } from '@chakra-ui/layout';
import NextLink from 'next/link';
import { useLogoutMutation, useMeQuery } from '../generated/graphql';
import { isServer } from '../utils/isServer';

const Navbar = () => {
  const { data, loading } = useMeQuery({
    skip: isServer(),
  });
  const [logout, { loading: logoutLoading }] = useLogoutMutation();

  const apolloClient = useApolloClient();

  let body = null;

  if (loading) {
  } else if (!data?.me) {
    body = (
      <>
        <NextLink href='/login'>
          <Link mr={2}>Login</Link>
        </NextLink>
        <NextLink href='/register'>
          <Link>Register</Link>
        </NextLink>
      </>
    );
  } else {
    body = (
      <Flex alignItems='center'>
        <NextLink href='/create-post'>
          <Button as={Link} mr={2}>
            Create Post
          </Button>
        </NextLink>
        <Box mr={2}>{data.me.username}</Box>
        <Button
          variant='link'
          onClick={async () => {
            await logout();
            await apolloClient.resetStore();
          }}
          isLoading={logoutLoading}>
          Logout
        </Button>
      </Flex>
    );
  }

  return (
    <Flex bg='tan' p={4} alignItems='center' mb={5}>
      <Flex maxW={800} mx='auto' alignItems='center' flex={1}>
        <NextLink href='/'>
          <Link>
            <Heading>LiReddit</Heading>
          </Link>
        </NextLink>
        <Flex ml='auto'>{body}</Flex>
      </Flex>
    </Flex>
  );
};

export default Navbar;
