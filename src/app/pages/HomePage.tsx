import { Link } from 'react-router-dom';

import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Divider,
  Box,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';

import { hero, goal } from '../';

export const HomePage = () => {
  return (
    <>
      <Container maxW={'8xl'} paddingX={10}>
        <Stack
          textAlign={'center'}
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 20 }}
        >
          <Heading
            fontWeight={800}
            fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}
          >
            ¡FORMA PARTE DEL{' '}
            <Text as={'span'} color={'red.600'}>
              CONTROL!
            </Text>
          </Heading>
          <Text color={'gray.500'} maxW={'3xl'} fontWeight={600}>
            {hero.description}
          </Text>

          <Link to="/projects">
            <Button
              rounded={'full'}
              p={6}
              colorScheme={'red'}
              bg={'red.600'}
              _hover={{ bg: 'red.800' }}
              fontSize={20}
            >
              {hero.cta}
            </Button>
          </Link>
        </Stack>
        <Flex w={'full'}></Flex>
      </Container>
      <Divider />
      <div style={{ background: '#F7FAFC' }}>
        <Container maxW={'8xl'} padding={10}>
          <Box p={4}>
            <Stack spacing={4} as={Container} maxW={'4xl'} textAlign={'center'}>
              <Heading
                fontSize={{ base: '2xl', sm: '4xl' }}
                fontWeight={'bold'}
                mb={5}
              >
                {goal.title}
              </Heading>
              <Text color={'gray.600'} fontSize={{ base: 'sm', sm: 'lg' }}>
                {goal.description}
              </Text>
            </Stack>

            <Container maxW={'5xl'} mt={12}>
              <Flex flexWrap="wrap" gridGap={6} justify="center">
                {goal.features.map(({ heading, description, icon }) => {
                  return (
                    <Box
                      maxW={{ base: 'full', md: '275px' }}
                      w={'full'}
                      borderWidth="2px"
                      borderRadius="xl"
                      borderColor="red.200"
                      overflow="hidden"
                      p={5}
                    >
                      <Stack align={'center'} spacing={2}>
                        <Flex
                          w={16}
                          h={16}
                          align={'center'}
                          justify={'center'}
                          color={'white'}
                          rounded={'full'}
                          bg={useColorModeValue('red.400', 'red.600')}
                        >
                          <Icon as={icon} w={10} h={10} />
                        </Flex>
                        <Box mt={2}>
                          <Heading size="md" textAlign="center">
                            {heading}
                          </Heading>
                          <Text mt={4} fontSize={'sm'} textAlign="justify">
                            {description}
                          </Text>
                        </Box>
                      </Stack>
                    </Box>
                  );
                })}
              </Flex>
            </Container>
          </Box>
        </Container>
      </div>
    </>
  );
};
