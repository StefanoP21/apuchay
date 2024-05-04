import { Link } from 'react-router-dom';

import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react';

import { PasswordField } from '..';
import svg from '/jamstack.svg';

export const SignUpPage = () => {
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
              ¡Bienvenido! Regístrate
            </Heading>
            <Text color="fg.muted">
              ¿Ya tienes una cuenta?{' '}
              <Link to="/auth/signin">Inicia sesión</Link>
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
              <FormControl>
                <FormLabel htmlFor="name">Nombres</FormLabel>
                <Input id="name" type="text" />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="lastname">Apellidos</FormLabel>
                <Input id="lastname" type="text" />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="email">Correo electrónico</FormLabel>
                <Input id="email" type="email" />
              </FormControl>
              <PasswordField />
            </Stack>
            <HStack justify="space-between">
              <Checkbox defaultChecked>Recuerdame</Checkbox>
            </HStack>
            <Stack spacing="6">
              <Button colorScheme="red">Registrarse</Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};
