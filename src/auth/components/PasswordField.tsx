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
  formState: FormState<UserForm>;
}

export const PasswordField = forwardRef<HTMLInputElement, PasswordFieldProps>(
  (props, ref) => {
    const { id, name, label, value, onChange, formState } = props;
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
      <FormControl isInvalid={!!formState.errors.password}>
        <FormLabel htmlFor={name}>{label}</FormLabel>
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
            name={name}
            type={isOpen ? 'text' : 'password'}
            autoComplete="current-password"
            value={value}
            onChange={onChange}
          />
        </InputGroup>
        {formState.errors.password && (
          <FormErrorMessage>
            {formState.errors.password.message}
          </FormErrorMessage>
        )}
      </FormControl>
    );
  }
);
