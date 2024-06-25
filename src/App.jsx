import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";
import Sidebar from "./components/Sidebar";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";
import Index from "./pages/Index.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <Router>
      <Flex>
        <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
        <Box flex={1}>
          <Navbar setIsSidebarOpen={setIsSidebarOpen} />
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