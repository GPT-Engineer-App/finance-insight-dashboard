import React from 'react';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";
import Sidebar from "./components/Sidebar";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";
import Index from "./pages/Index.jsx";
import { Navbar, isSidebarOpen } from "./components/Navbar.jsx";

function App() {
  return (
    <Router>
      <Flex>
        <Sidebar display={{ base: isSidebarOpen ? 'block' : 'none', md: 'block' }} />
        <Box flex={1}>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Index />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Box>
      </Flex>
    </Router>
  );
}

export default App;