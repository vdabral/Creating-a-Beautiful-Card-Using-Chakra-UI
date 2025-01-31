import React from 'react';
import { ChakraProvider, Box, Image, Heading, Text, VStack, HStack, Tag, Button, Center } from '@chakra-ui/react';

const App = () => {
  return (
    <ChakraProvider>
      <Center h="100vh" bg="gray.50">
        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" bg="white" boxShadow="lg">
          <VStack align="center" p={6}>
            <Image
              borderRadius="full"
              boxSize="150px"
              src="https://m.media-amazon.com/images/M/MV5BYmNhMzVhYmUtZTUwYi00NDVhLWI3NzEtZDYxODQzYTYzMjY5XkEyXkFqcGc@._V1_.jpg"
              alt="Lindsey James"
            />
            <Heading as="h3" size="lg" mt={4}>
              Lindsey James
            </Heading>
            <Text color="gray.600" fontSize="sm">
              @lindsey_jam3s
            </Text>
            <Text color="gray.600" fontSize="sm" textAlign="center">
              Actress, musician, songwriter, and artist. PM for work inquiries or #tag me in your posts.
            </Text>
            <HStack spacing={2} mt={4}>
              <Tag size="sm" colorScheme="teal">#ART</Tag>
              <Tag size="sm" colorScheme="teal">#PHOTOGRAPHY</Tag>
              <Tag size="sm" colorScheme="teal">#MUSIC</Tag>
            </HStack>
            <HStack spacing={4} mt={4}>
              <Button colorScheme="teal" variant="outline" size="sm">
                Message
              </Button>
              <Button colorScheme="teal" size="sm">
                Follow
              </Button>
            </HStack>
          </VStack>
        </Box>
      </Center>
    </ChakraProvider>
  );
};

export default App;