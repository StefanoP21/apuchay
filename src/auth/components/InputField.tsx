import { FormState } from 'react-hook-form';

import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputProps,
} from '@chakra-ui/react';

import { UserForm } from '..';

interface PasswordFieldProps extends InputProps {
  label: string;
  id: keyof UserForm;
  formState: FormState<UserForm>;
}

export const InputField: React.FC<PasswordFieldProps> = (props) => {
  const { id, label, type, value, onChange, formState } = props;

  return (
    <FormControl isInvalid={!!formState.errors[id]}>
      <FormLabel htmlFor={id}>{label}</FormLabel>
      <InputGroup>
        <Input id={id} type={type} value={value} onChange={onChange} />
      </InputGroup>
      {formState.errors[id] && (
        <FormErrorMessage>{formState.errors[id].message}</FormErrorMessage>
      )}
    </FormControl>
  );
};
