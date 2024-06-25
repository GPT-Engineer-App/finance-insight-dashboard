import React, { useState } from 'react';
import { Box, Button, Container, FormControl, FormLabel, Heading, Input, VStack, useToast } from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the login logic
    // For now, we'll just simulate a successful login
    if (username && password) {
      toast({
        title: "Login Successful",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
      navigate('/');
    } else {
      toast({
        title: "Login Failed",
        description: "Please enter both username and password",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  return (
    <Container maxW="container.sm" centerContent>
      <Box width="100%" p={8} mt={10} borderWidth={1} borderRadius={8} boxShadow="lg">
        <VStack spacing={4} as="form" onSubmit={handleSubmit}>
          <Heading>Login to FinDash</Heading>
          <FormControl isRequired>
            <FormLabel>Username</FormLabel>
            <Input 
              type="text" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <Input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          <Button type="submit" colorScheme="blue" width="full">
            Login
          </Button>
        </VStack>
      </Box>
    </Container>
  );
};

export default Login;