import { Box, useColorModeValue } from '@chakra-ui/react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import CreatePage from './pages/CreatePage';
import Navbar from './components/Navbar';


function App() {
  return (
    <Box minH={"100vh"} bg={useColorModeValue("gray.10", "gray.900")}>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>

    </Box>
  );
}

//NavBar is above the routes so I can see it on all routes
export default App
