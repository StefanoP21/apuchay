import { forwardRef, useRef } from 'react';
import { FormState } from 'react-hook-form';

import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputProps,
  InputRightElement,
  useDisclosure,
  useMergeRefs,
} from '@chakra-ui/react';
import { HiEye, HiEyeOff } from 'react-icons/hi';

import { UserForm } from '..';

interface PasswordFieldProps extends InputProps {
  label: string;
  id: keyof UserForm;
  formState: FormState<UserForm>;
}

export const PasswordField = forwardRef<HTMLInputElement, PasswordFieldProps>(
  (props, ref) => {
    const { id, label, value, onChange, formState } = props;
    const { isOpen, onToggle } = useDisclosure();
    const inputRef = useRef<HTMLInputElement>(null);

    const mergeRef = useMergeRefs(inputRef, ref);
    const onClickReveal = () => {
      onToggle();
      if (inputRef.current) {
        inputRef.current.focus({ preventScroll: true });
      }
    };

    return (
      <FormControl isInvalid={!!formState.errors[id]}>
        <FormLabel htmlFor={id}>{label}</FormLabel>
        <InputGroup>
          <InputRightElement>
            <IconButton
              variant="text"
              aria-label={isOpen ? 'Mask password' : 'Reveal password'}
              icon={isOpen ? <HiEyeOff /> : <HiEye />}
              onClick={onClickReveal}
            />
          </InputRightElement>
          <Input
            id={id}
            ref={mergeRef}
            type={isOpen ? 'text' : 'password'}
            autoComplete="current-password"
            value={value}
            onChange={onChange}
          />
        </InputGroup>
        {formState.errors[id] && (
          <FormErrorMessage>{formState.errors[id].message}</FormErrorMessage>
        )}
      </FormControl>
    );
  }
);
