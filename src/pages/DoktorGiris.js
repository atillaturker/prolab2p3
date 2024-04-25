import {
  Box,
  Button,
  ChakraProvider,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export const DoktorGiris = () => {
  return (
    <ChakraProvider>
      <Box maxW="md" mx="auto" mt="150px" p={8} rounded="lg" boxShadow="lg">
        <form>
          <FormControl id="email" isRequired>
            <FormLabel>Email address</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl id="password" mt={4} isRequired>
            <FormLabel>Password</FormLabel>
            <Input type="password" />
          </FormControl>
          <Button colorScheme="teal" type="submit" width="full" mt={4}>
            Sign In
          </Button>
          <Text mt={4} display="flex" alignItems="center">
            <Text>Hesabin Yok mu?</Text>
            <Text color="blue" ml={1}>
              <Link to="/register">Kayıt ol</Link>
            </Text>
          </Text>
        </form>
      </Box>
    </ChakraProvider>
  );
};
