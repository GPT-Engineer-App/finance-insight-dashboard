import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Flex, Heading, Spacer, Button, IconButton, Menu, MenuButton, MenuList, MenuItem, Avatar } from "@chakra-ui/react";
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
        <Menu>
          <MenuButton as={Button} rounded={'full'} variant={'link'} cursor={'pointer'} minW={0}>
            <Avatar size={'sm'} src={'https://bit.ly/broken-link'} />
          </MenuButton>
          <MenuList>
            <MenuItem as={Link} to="/profile">My Profile</MenuItem>
            <MenuItem as={Link} to="/settings">Settings</MenuItem>
          </MenuList>
        </Menu>
        <Button as={Link} to="/login" colorScheme="blue" ml={4}>Login</Button>
      </Flex>
    </Box>
  );
};

export default Navbar;