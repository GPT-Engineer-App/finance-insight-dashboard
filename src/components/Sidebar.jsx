import React from 'react';
import { Box, VStack, Text, Link as ChakraLink, useColorModeValue, IconButton, Flex } from "@chakra-ui/react";
import { Link as RouterLink } from 'react-router-dom';
import { FiHome, FiFileText, FiSettings, FiUser, FiX } from 'react-icons/fi';

const SidebarItem = ({ icon, children, to }) => {
  return (
    <ChakraLink
      as={RouterLink}
      to={to}
      w="full"
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.100', 'gray.700'),
      }}
    >
      <Box display="flex" alignItems="center" p={3}>
        {icon}
        <Text ml={2}>{children}</Text>
      </Box>
    </ChakraLink>
  );
};

const Sidebar = ({ isOpen, setIsOpen }) => {
  return (
    <Box
      as="nav"
      pos="fixed"
      top="0"
      left="0"
      zIndex="sticky"
      h="full"
      pb="10"
      overflowX="hidden"
      overflowY="auto"
      bg={useColorModeValue('white', 'gray.800')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w="60"
      display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
    >
      <Flex justify="space-between" align="center" p={5}>
        <Text fontSize="2xl" fontWeight="bold" color={useColorModeValue('gray.800', 'white')}>
          FinDash
        </Text>
        <IconButton
          icon={<FiX />}
          onClick={() => setIsOpen(false)}
          display={{ base: 'flex', md: 'none' }}
          aria-label="Close menu"
        />
      </Flex>
      <VStack align="stretch" spacing={0}>
        <SidebarItem icon={<FiHome />} to="/">Dashboard</SidebarItem>
        <SidebarItem icon={<FiFileText />} to="/reports">Reports</SidebarItem>
        <SidebarItem icon={<FiSettings />} to="/settings">Settings</SidebarItem>
        <SidebarItem icon={<FiUser />} to="/profile">Profile</SidebarItem>
      </VStack>
    </Box>
  );
};

export default Sidebar;