import React from 'react';
import { Box, Container, Heading, Text } from "@chakra-ui/react";

const Settings = () => {
  return (
    <Container maxW="container.xl" py={5}>
      <Box>
        <Heading as="h1" size="xl" mb={4}>Settings</Heading>
        <Text>This is the Settings page. You can add your settings content here.</Text>
      </Box>
    </Container>
  );
};

export default Settings;