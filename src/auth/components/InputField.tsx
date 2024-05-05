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
  formState: FormState<UserForm>;
}

export const InputField: React.FC<PasswordFieldProps> = (props) => {
  const { id, name, label, type, value, onChange, formState } = props;

  return (
    <FormControl isInvalid={!!formState.errors.email}>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <InputGroup>
        <Input
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
        />
      </InputGroup>
      {formState.errors.email && (
        <FormErrorMessage>{formState.errors.email.message}</FormErrorMessage>
      )}
    </FormControl>
  );
};
