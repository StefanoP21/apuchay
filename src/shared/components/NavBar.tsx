import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Container, Flex, Box, Text, Icon, Stack } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

import svg from '/jamstack-w.svg';

const routes = [
  {
    to: '/',
    label: 'Inicio',
  },
  {
    to: '/projects',
    label: 'Obras',
  },
  {
    to: '/learn',
    label: 'Capacítate',
  },
];

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div style={{ background: '#C53030', color: 'white' }}>
      <Container maxWidth="8xl" paddingX={10}>
        <Flex
          as="nav"
          alignItems="center"
          justify="space-between"
          wrap="wrap"
          width="100%"
          paddingY={10}
          color="white"
        >
          <Box display="flex">
            <img src={svg} alt="logo" width="40px" />
            <Text
              fontSize="4xl"
              fontWeight="bold"
              color="white"
              marginStart={2}
            >
              APUCHAY
            </Text>
          </Box>

          <Box display={{ base: 'block', sm: 'none' }} onClick={toggleMenu}>
            {isOpen ? (
              <Icon as={CloseIcon} />
            ) : (
              <Icon as={HamburgerIcon} boxSize={6} />
            )}
          </Box>

          <Box
            display={{ base: isOpen ? 'block' : 'none', sm: 'block' }}
            flexBasis={{ base: '100%', sm: 'auto' }}
          >
            <Stack
              spacing={5}
              align="center"
              justify={['center', 'space-between', 'flex-end']}
              direction={['column', 'row']}
              paddingTop={[8, 4, 0]}
            >
              {routes.map(({ to, label }) => (
                <Link to={to}>
                  <Text
                    display="block"
                    fontSize="xl"
                    fontWeight="600"
                    paddingX={2}
                    paddingY={1}
                    _hover={{ bg: 'red.800', rounded: 'xl' }}
                  >
                    {label}
                  </Text>
                </Link>
              ))}
            </Stack>
          </Box>
        </Flex>
      </Container>
    </div>
  );
};
