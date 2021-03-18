import { Box, Button } from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import React from 'react';
import InputField from '../components/InputField';
import Wrapper from '../components/Wrapper';
import { useCreatePostMutation } from '../generated/graphql';
import { useIsAuth } from '../utils/useIsAuth';
import { withApollo } from '../utils/withApollo';

const CreatePost = () => {
  const [createPost] = useCreatePostMutation();
  const router = useRouter();

  useIsAuth();

  return (
    <Wrapper variant='small'>
      <Formik
        initialValues={{ title: '', text: '' }}
        onSubmit={async values => {
          const { errors } = await createPost({
            variables: {
              input: values,
            },
            update: cache => {
              cache.evict({ fieldName: 'posts' });
            },
          });

          if (!errors) {
            router.push('/');
          }
        }}>
        {({ isSubmitting }) => (
          <Form>
            <Box mt={4}>
              <InputField label='Title' name='title' />
            </Box>
            <Box mt={4}>
              <InputField label='Body' name='text' textarea />
            </Box>
            <Button type='submit' colorScheme='teal' mt={4} isLoading={isSubmitting}>
              Post
            </Button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default withApollo({ ssr: false })(CreatePost);
