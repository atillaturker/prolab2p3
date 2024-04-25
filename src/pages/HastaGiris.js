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

export const HastaGiris = () => {
  return (
    <ChakraProvider>
      <Box maxW="md" mx="auto" mt="150px" p={8} rounded="lg" boxShadow="lg">
        <form>
          <FormControl id="e-mail" isRequired>
            <FormLabel>E-mail</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Sifre</FormLabel>
            <Input type="password" />
          </FormControl>
          <Button colorScheme="teal" type="submit" width="full" mt={4}>
            Giriş Yap
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
