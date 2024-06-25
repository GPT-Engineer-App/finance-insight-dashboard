import React from 'react';
import { Box, Container, Heading, Text } from "@chakra-ui/react";

const Profile = () => {
  return (
    <Container maxW="container.xl" py={5}>
      <Box>
        <Heading as="h1" size="xl" mb={4}>Profile</Heading>
        <Text>This is the Profile page. You can add your profile content here.</Text>
      </Box>
    </Container>
  );
};

export default Profile;