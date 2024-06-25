import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Flex, Heading, Spacer, Button, IconButton } from "@chakra-ui/react";
import { Link } from 'react-router-dom';

import { FiMenu } from 'react-icons/fi';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <Box bg="gray.100" px={4}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <IconButton
          display={{ base: 'flex', md: 'none' }}
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          icon={<FiMenu />}
          aria-label="Open menu"
          mr={2}
        />
        <Heading as="h1" size="lg">
          <Link to="/">FinDash</Link>
        </Heading>
        <Spacer />
        <Button as={Link} to="/login" colorScheme="blue">Login</Button>
      </Flex>
    </Box>
  );
};

export default Navbar;