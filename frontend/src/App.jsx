import { Box } from '@chakra-ui/react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import CreatePage from './pages/CreatePage';
import Navbar from './components/Navbar';


function App() {
  return (
    <Box minH={"100vh"}>
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
