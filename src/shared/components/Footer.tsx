import {
  chakra,
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react';
import { PhoneIcon, EmailIcon, ExternalLinkIcon } from '@chakra-ui/icons';

import svg from '/jamstack-w.svg';

export const Footer = () => {
  return (
    <Box
      bg={useColorModeValue('red.600', 'red.900')}
      color={useColorModeValue('white', 'gray.200')}
    >
      <Container
        as={Stack}
        maxW={'8xl'}
        py={8}
        px={10}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
      >
        <Box display="flex" alignItems="center">
          <img src={svg} alt="logo" width="30px" />
          <Text fontSize="2xl" fontWeight="bold" color="white" marginStart={2}>
            APUCHAY
          </Text>
        </Box>
        <Text>© 2023 Hackathon - Stefano Palomino</Text>
        <Stack direction={'row'} spacing={6}>
          <chakra.button
            bg={useColorModeValue('blackAlpha.100', 'blackAlpha.200')}
            rounded={'full'}
            w={10}
            h={10}
            cursor={'pointer'}
            as={'a'}
            href={'tel:+51987052642'}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            _hover={{
              bg: useColorModeValue('blackAlpha.500', 'blackAlpha.700'),
            }}
            target="_blank"
          >
            <VisuallyHidden>{'Phone'}</VisuallyHidden>
            <PhoneIcon />
          </chakra.button>

          <chakra.button
            bg={useColorModeValue('blackAlpha.100', 'blackAlpha.200')}
            rounded={'full'}
            w={10}
            h={10}
            cursor={'pointer'}
            as={'a'}
            href={'mailto:stefanop21@outlook.es'}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            _hover={{
              bg: useColorModeValue('blackAlpha.500', 'blackAlpha.700'),
            }}
            target="_blank"
          >
            <VisuallyHidden>{'Email'}</VisuallyHidden>
            <EmailIcon />
          </chakra.button>

          <chakra.button
            bg={useColorModeValue('blackAlpha.100', 'blackAlpha.200')}
            rounded={'full'}
            w={10}
            h={10}
            cursor={'pointer'}
            as={'a'}
            href={'https://stefano.vercel.app/'}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            _hover={{
              bg: useColorModeValue('blackAlpha.500', 'blackAlpha.700'),
            }}
            target="_blank"
          >
            <VisuallyHidden>{'Infobras'}</VisuallyHidden>
            <ExternalLinkIcon />
          </chakra.button>
        </Stack>
      </Container>
    </Box>
  );
};
