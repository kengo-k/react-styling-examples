import {
  AspectRatio,
  Box,
  Center,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";

const Card: React.FC<{ title: string; description: string }> = ({
  title,
  description,
}) => {
  return (
    <Box
      bg="white"
      p={5}
      borderRadius="xl"
      shadow="xl"
      borderColor="gray.100"
      borderWidth={2}
      maxW="320px"
    >
      <AspectRatio ratio={16 / 9}>
        <Image
          src="https://via.placeholder.com/280"
          borderRadius="lg"
          objectFit="cover"
          alt="Card image"
        />
      </AspectRatio>
      <Heading size="lg" mt={4} mb={2}>
        {title}
      </Heading>
      <Text color="gray.700">{description}</Text>
    </Box>
  );
};

const App = () => {
  const cards = [
    { title: "Card 1", description: "This is a description for card 1." },
    { title: "Card 2", description: "This is a description for card 2." },
    { title: "Card 3", description: "This is a description for card 3." },
  ];

  return (
    <Box p={8} bgGradient="linear(to-r, teal.500,blue.500)" minHeight="100vh">
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="center"
        spacing={10}
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
          A more sophisticated demonstration of Chakra UI's capabilities and
          elegance.
        </Text>
        <Center>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} w="full">
            {cards.map((card, index) => (
              <Card
                key={index}
                title={card.title}
                description={card.description}
              />
            ))}
          </SimpleGrid>
        </Center>
      </Stack>
    </Box>
  );
};

export default App;
