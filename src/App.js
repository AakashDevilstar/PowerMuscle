import React from 'react';
import { Route, Routes } from 'react-router-dom'; 
import { Box } from '@mui/material';
import Homemain from './Auth/Homemain';
import Login from './Auth/Login';
import Signup from './Auth/Signup';


const App = () => (
  <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
      <Homemain/>
     <Routes>
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup />} />
      {/* <Route path="/Homemain" element={<Homemain />} /> */}
    </Routes>
  </Box>
);

export default App;