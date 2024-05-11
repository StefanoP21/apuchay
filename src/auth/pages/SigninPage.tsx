import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import {
  Box,
  Button,
  Checkbox,
  Container,
  Heading,
  HStack,
  Stack,
  Text,
  useToast,
} from '@chakra-ui/react';

import svg from '/jamstack.svg';
import { InputField, PasswordField, useSignIn, type UserForm } from '..';

const defaultValues = {
  email: 'stefano@gmail.com',
  password: '123456',
};

export const SignInPage = () => {
  const mutation = useSignIn();
  const { error, isError, isPending, isSuccess, mutate } = mutation;
  const toast = useToast();
  const { control, formState, handleSubmit } = useForm<UserForm>({
    defaultValues,
  });

  const onSubmit: SubmitHandler<UserForm> = (data) => {
    mutate(data);
  };

  useEffect(() => {
    if (isError) {
      toast({
        title: 'Error al iniciar sesión',
        description: error?.message || 'Ocurrió un error inesperado',
        position: 'top-right',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  }, [isSuccess, isError, toast, error]);

  return (
    <Container
      maxW="lg"
      py={{ base: '12', md: '24' }}
      px={{ base: '0', sm: '8' }}
    >
      <Stack spacing="8">
        <Stack spacing="6">
          <Stack alignSelf="center">
            <img src={svg} alt="Jamstack" width={55} />
          </Stack>

          <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
            <Heading size={{ base: 'xs', md: 'lg' }} color="#C53030">
              ¡Bienvenido de vuelta!
            </Heading>
            <Text color="fg.muted">
              ¿No tienes una cuenta? <Link to="/auth/signup">Regístrate</Link>
            </Text>
          </Stack>
        </Stack>
        <Box
          py={{ base: '0', sm: '8' }}
          px={{ base: '4', sm: '10' }}
          bg={{ base: 'transparent', sm: 'bg.surface' }}
          boxShadow={{ base: 'none', sm: 'md' }}
          borderRadius={{ base: 'none', sm: 'xl' }}
        >
          <Stack spacing="6">
            <Stack spacing="5">
              <Controller
                control={control}
                name="email"
                rules={{
                  required: {
                    value: true,
                    message: 'El correo es obligatorio',
                  },
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Correo inválido',
                  },
                }}
                render={({ field }) => (
                  <InputField
                    id="email"
                    label="Correo electrónico"
                    type="email"
                    value={field.value}
                    onChange={field.onChange}
                    formState={formState}
                  />
                )}
              />
              <Controller
                control={control}
                name="password"
                rules={{
                  required: {
                    value: true,
                    message: 'La contraseña es obligatoria',
                  },
                  minLength: {
                    value: 6,
                    message: 'La contraseña debe tener al menos 6 caracteres',
                  },
                }}
                render={({ field }) => (
                  <PasswordField
                    id="password"
                    label="Contraseña"
                    value={field.value}
                    onChange={field.onChange}
                    formState={formState}
                  />
                )}
              />
            </Stack>
            <HStack justify="space-between">
              <Checkbox defaultChecked>Recuerdame</Checkbox>
            </HStack>
            <Stack spacing="6">
              <Button
                colorScheme="red"
                onClick={handleSubmit(onSubmit)}
                isDisabled={isPending}
              >
                {isPending ? 'Verificando sesión...' : 'Iniciar sesión'}
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};
