import React from 'react';
import { Box, Flex, Heading, Spacer, Button } from "@chakra-ui/react";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Box bg="gray.100" px={4}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <Heading as="h1" size="lg">
          <Link to="/">FinDash</Link>
        </Heading>
        <Spacer />
        <Button colorScheme="blue">Login</Button>
      </Flex>
    </Box>
  );
};

export default Navbar;