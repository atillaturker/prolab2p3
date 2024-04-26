import {
  Box,
  Button,
  ChakraProvider,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FIREBASE_AUTH } from "../firebaseConfig";

export const DoktorGiris = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        FIREBASE_AUTH,
        email,
        password
      );
      if (userCredential.user) {
        console.log("Signed in successfully");
        navigate("/doktorDashboard");
      } else {
      }
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };
  return (
    <ChakraProvider>
      <Box maxW="md" mx="auto" mt="150px" p={8} rounded="lg" boxShadow="lg">
        <form>
          <FormControl id="email" isRequired>
            <FormLabel>Email address</FormLabel>
            <Input
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              type="email"
            />
          </FormControl>
          <FormControl id="password" mt={4} isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              type="password"
            />
          </FormControl>
          <Button
            onClick={handleSubmit}
            colorScheme="teal"
            type="submit"
            width="full"
            mt={4}
          >
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
