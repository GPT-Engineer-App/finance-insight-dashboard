import React from 'react';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Index from "./pages/Index.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <Router>
      <Box>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Index />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;