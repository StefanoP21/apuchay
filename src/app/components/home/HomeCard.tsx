import {
  Box,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

interface HomeCardProps {
  feature: {
    id: number;
    icon: any;
    heading: string;
    description: string;
  };
}

export const HomeCard = ({ feature }: HomeCardProps) => {
  const { icon, heading, description } = feature;

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
};
