import { Box, Button } from '@chakra-ui/react';
import { Formik, Form } from 'formik';
import InputField from '../../../components/InputField';
import Layout from '../../../components/Layout';
import { withApollo } from '../../../utils/withApollo';

const EditPost = () => {
  return (
    <Layout variant='small'>
      <Formik initialValues={{ title: '', text: '' }} onSubmit={async values => {}}>
        {({ isSubmitting }) => (
          <Form>
            <Box mt={4}>
              <InputField label='Edit Title' name='title' />
            </Box>
            <Box mt={4}>
              <InputField label='Edit Body' name='text' textarea />
            </Box>
            <Button type='submit' colorScheme='teal' mt={4} isLoading={isSubmitting}>
              Post
            </Button>
          </Form>
        )}
      </Formik>
    </Layout>
  );
};

export default withApollo({ ssr: false })(EditPost);
