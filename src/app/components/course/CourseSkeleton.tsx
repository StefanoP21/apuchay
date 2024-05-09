import { Box, SimpleGrid, Skeleton, Stack } from '@chakra-ui/react';

export const CourseSkeleton = () => {
  return (
    <SimpleGrid minChildWidth="xs" spacing={10}>
      {[1, 2, 3].map((key) => (
        <Box key={key} borderRadius="3xl" p={8}>
          <Skeleton borderRadius="xl" w="auto" h="340px" />
          <Stack mt="6" spacing="3">
            <Box alignSelf="center">
              <Skeleton w="300px" h="50px" />
            </Box>
            <Skeleton h="10px" />
            <Skeleton h="10px" />
            <Skeleton h="10px" />
            <Skeleton h="10px" />
          </Stack>
          <Skeleton h="2px" my="6" />
          <Box display="flex" alignItems="center" justifyContent="center">
            <Skeleton w="250px" h="40px" />
          </Box>
        </Box>
      ))}
    </SimpleGrid>
  );
};
