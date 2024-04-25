import { Box, Button, ChakraProvider, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <ChakraProvider>
      <VStack spacing={5} align="center" m={5}>
        <Text fontSize="2xl">Hoş Geldiniz!</Text>
        <Box>
          <Text mb={3}>Lütfen hesap türünüzü seçin:</Text>
          <Button
            as={Link}
            to="/hasta"
            colorScheme="teal"
            mr={3}
            onClick={() => console.log("Hasta girişi")}
          >
            Hasta Girişi
          </Button>
          <Button
            as={Link}
            to="/doktor"
            colorScheme="blue"
            onClick={() => console.log("Doktor girişi")}
          >
            Doktor Girişi
          </Button>
        </Box>
      </VStack>
    </ChakraProvider>
  );
}
