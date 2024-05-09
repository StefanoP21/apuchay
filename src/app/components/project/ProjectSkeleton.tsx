import { Box, SimpleGrid, Skeleton, Stack } from '@chakra-ui/react';

export const ProjectSkeleton = () => {
  return (
    <SimpleGrid minChildWidth="xs" spacing={10}>
      {[1, 2, 3].map((key) => (
        <Box key={key} w={['xs', 'sm']} borderRadius="3xl" p="6">
          <Skeleton borderRadius="xl" h="220px" />
          <Stack mt="6" spacing="3">
            <Skeleton w="300px" h="40px" />
            <Skeleton h="10px" />
            <Skeleton h="10px" />
            <Skeleton h="10px" />
            <Skeleton w="150px" h="30px" />
          </Stack>
          <Skeleton h="2px" my="6" />
          <Skeleton w="180px" h="40px" />
        </Box>
      ))}
    </SimpleGrid>
  );
};
