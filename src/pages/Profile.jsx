import React from 'react';
import { Box, Container, Heading, Text, VStack, Avatar, HStack, Button } from "@chakra-ui/react";

const Profile = () => {
  return (
    <Container maxW="container.xl" py={5}>
      <Box borderWidth="1px" borderRadius="lg" p={5} shadow="md">
        <VStack spacing={4} align="stretch">
          <HStack spacing={4}>
            <Avatar size="xl" src="https://bit.ly/broken-link" />
            <VStack align="start">
              <Heading as="h2" size="lg">John Doe</Heading>
              <Text>Email: john.doe@example.com</Text>
              <Text>Position: Software Engineer</Text>
            </VStack>
          </HStack>
          <Button colorScheme="blue">Edit Profile</Button>
        </VStack>
      </Box>
    </Container>
  );
};

export default Profile;