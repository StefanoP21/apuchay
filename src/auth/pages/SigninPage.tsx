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

export const SigninPage = () => (
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
            <FormControl>
              <FormLabel htmlFor="email">Correo electrónico</FormLabel>
              <Input id="email" type="email" />
            </FormControl>
            <PasswordField />
          </Stack>
          <HStack justify="space-between">
            <Checkbox defaultChecked>Recuerdame</Checkbox>
            <Button variant="text" size="sm">
              ¿Olvidaste tu contraseña?
            </Button>
          </HStack>
          <Stack spacing="6">
            <Button colorScheme="red">Iniciar sesión</Button>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  </Container>
);
