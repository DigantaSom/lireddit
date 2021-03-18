import { FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/form-control';
import { Input, Textarea } from '@chakra-ui/react';
import { useField } from 'formik';

type InputFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  name: string;
  textarea?: boolean;
};

const InputField: React.FC<InputFieldProps> = ({
  label,
  textarea,
  size: _,
  ...props
}) => {
  const [field, { error }] = useField(props);

  // TODO: type 'any' needs to be changed
  let InputComponent: any = Input;

  if (textarea) {
    InputComponent = Textarea;
  }

  return (
    <FormControl isInvalid={!!error}>
      <FormLabel htmlFor={field.name}>{label}</FormLabel>
      <InputComponent {...field} {...props} id={field.name} />
      {error && <FormErrorMessage>{error}</FormErrorMessage>}
    </FormControl>
  );
};

export default InputField;
