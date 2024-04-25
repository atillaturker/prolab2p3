import {
  Box,
  Button,
  ChakraProvider,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FIREBASE_AUTH, FIREBASE_DB } from "../firebaseConfig";

export const Register = () => {
  const [type, setType] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCheckboxChange = (value) => {
    setType(value);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        FIREBASE_AUTH,
        email,
        password
      );
      if (userCredential.user) {
        const newUser = userCredential.user;
        const usersCollectionRef = collection(FIREBASE_DB, "users");
        await addDoc(usersCollectionRef, {
          email: newUser.email,
          password: password,
          userType: type,
        });
        setIsModalOpen(true); // Open the modal
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <ChakraProvider>
      <Box maxW="md" mx="auto" mt="150px" p={8} rounded="lg" boxShadow="lg">
        <form>
          <Flex direction={"row"}>
            <FormControl id="doctor" isRequired>
              <FormLabel>Doktor</FormLabel>
              <Checkbox
                onChange={() => handleCheckboxChange("doktor")}
                isChecked={type === "doktor"}
                value="doktor"
              />
            </FormControl>
            <FormControl id="patient" isRequired>
              <FormLabel>Hasta</FormLabel>
              <Checkbox
                value="hasta"
                isChecked={type === "hasta"}
                onChange={() => handleCheckboxChange("hasta")}
              />
            </FormControl>
          </Flex>
          <FormControl id="email" isRequired>
            <FormLabel>Email address</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </FormControl>
          <FormControl id="password" mt={4} isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
          </FormControl>
          <Button
            onClick={handleSubmit}
            colorScheme="teal"
            type="submit"
            width="full"
            mt={4}
          >
            Kayıt ol
          </Button>
        </form>
        <Text mt={4} display="flex" alignItems="center">
          <Text>Hesabin Var mı?</Text>
          <Text color="blue" ml={1}>
            <Link to="/">Giriş Yap</Link>
          </Text>
        </Text>
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Kayıt Başarılı!</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text>Hesabınız başarıyla oluşturuldu.</Text>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="teal" onClick={closeModal}>
                Tamam
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </ChakraProvider>
  );
};
