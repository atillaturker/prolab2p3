import {
  Box,
  Button,
  ChakraProvider,
  Divider,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FIREBASE_AUTH } from "../firebaseConfig";

export const DoktorDashboard = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!FIREBASE_AUTH.currentUser) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <ChakraProvider>
      {FIREBASE_AUTH.currentUser && (
        <Box p="4">
          <Heading mb="4">Hasta Dashboard</Heading>
          <Text>Hoş Geldiniz: {FIREBASE_AUTH.currentUser.email}</Text>
          <Stack spacing="4">
            <Box bg="gray.100" p="4" borderRadius="md">
              <Heading size="md">Randevularım</Heading>
              <Divider mt="2" mb="2" />
              <Text>
                23/04/2024 - Dr. Ahmet Bey ile randevunuz bulunmaktadır.
              </Text>
              <Text>
                25/04/2024 - Dr. Ayşe Hanım ile randevunuz bulunmaktadır.
              </Text>
            </Box>

            <Box bg="gray.100" p="4" borderRadius="md">
              <Heading size="md">Tıbbi Raporlarım</Heading>
              <Divider mt="2" mb="2" />
              <Text>21/04/2024 - Kan Testi Raporu</Text>
              <Text>20/04/2024 - MR Sonucu Raporu</Text>
            </Box>

            <Box bg="gray.100" p="4" borderRadius="md">
              <Heading size="md">Laboratuvar Sonuçları</Heading>
              <Divider mt="2" mb="2" />
              <Button colorScheme="teal">Sonuçları Görüntüle</Button>
            </Box>
          </Stack>
        </Box>
      )}
    </ChakraProvider>
  );
};
