import React from 'react';
import { Box, Container, Heading, Text } from "@chakra-ui/react";

const Reports = () => {
  return (
    <Container maxW="container.xl" py={5}>
      <Box>
        <Heading as="h1" size="xl" mb={4}>Reports</Heading>
        <Text>This is the Reports page. You can add your reports content here.</Text>
      </Box>
    </Container>
  );
};

export default Reports;