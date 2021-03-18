import { Box, Button } from '@chakra-ui/react';
import { Formik, Form } from 'formik';
import { useState } from 'react';
import InputField from '../components/InputField';
import Wrapper from '../components/Wrapper';
import { useForgotPasswordMutation } from '../generated/graphql';
import { withApollo } from '../utils/withApollo';

const ForgotPassword = () => {
  const [completed, setCompleted] = useState(false);
  const [forgotPassword] = useForgotPasswordMutation();

  return (
    <Wrapper variant='small'>
      <Formik
        initialValues={{ email: '' }}
        onSubmit={async values => {
          await forgotPassword({ variables: values });
          setCompleted(true);
        }}>
        {({ isSubmitting }) =>
          completed ? (
            <Box>If an account with that email exists, we sent you an email</Box>
          ) : (
            <Form>
              <Box mt={4}>
                <InputField label='Your Email' name='email' type='email' />
              </Box>
              <Button type='submit' colorScheme='teal' mt={4} isLoading={isSubmitting}>
                Get link
              </Button>
            </Form>
          )
        }
      </Formik>
    </Wrapper>
  );
};

export default withApollo({ ssr: false })(ForgotPassword);
