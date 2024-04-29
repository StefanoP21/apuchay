import { Box, Heading, Text, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export const ErrorPage = () => {
  return (
    <Box textAlign="center" py={20} px={10}>
      <Heading
        display="inline-block"
        as="h2"
        size="4xl"
        bgGradient="linear(to-r, red.400, red.600)"
        backgroundClip="text"
      >
        404
      </Heading>
      <Text fontSize={25} mt={3} mb={2}>
        Página no encontrada
      </Text>
      <Text color={'gray.500'} fontSize={20} mb={20}>
        La página que estás buscando no existe o no se encuentra disponible.
      </Text>

      <Link to="/">
        <Button
          colorScheme="red"
          bgGradient="linear(to-r, red.400, red.500, red.600)"
          color="white"
          variant="solid"
          _hover={{
            bgGradient: 'linear(to-r, red.600, red.700, red.800)',
            boxShadow: 'xl',
          }}
          p={6}
          fontSize={20}
          mb={10}
        >
          Volver al inicio
        </Button>
      </Link>
    </Box>
  );
};
