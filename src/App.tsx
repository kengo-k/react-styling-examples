import { Box, Button, Heading, Image, Stack, Text } from "@chakra-ui/react";

const App = () => {
  return (
    <Box p={8} bgGradient="linear(to-r, teal.500,blue.500)" minHeight="100vh">
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="center"
        spacing={8}
        minHeight="100vh"
      >
        <Image
          src="https://via.placeholder.com/150"
          borderRadius="full"
          boxSize={150}
          alt="Logo"
        />
        <Heading color="white" mb={6}>
          Welcome to Chakra UI Demo
        </Heading>
        <Text fontSize="xl" color="white" textAlign="center" mb={6}>
          A simple demonstration of Chakra UI's capabilities and elegance. Get
          started with modern UI components!
        </Text>
        <Button colorScheme="pink">Get Started</Button>
      </Stack>
    </Box>
  );
};

export default App;
