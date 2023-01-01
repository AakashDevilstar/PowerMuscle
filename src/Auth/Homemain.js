import React from 'react'
import { Route, Routes } from 'react-router-dom'; 
import { Box } from '@mui/material';

import '../App.css';
import ExerciseDetail from '../Pages/ExerciseDetail';
import Home from '../Pages/Home';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import Contact_us from '../Component/Contact_us';
import Membership from '../Component/Membership';

function Homemain() {
  return (
    <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercise/:id" element={<ExerciseDetail />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/contact_us" element={<Contact_us />} />
        </Routes>
    </Box>
  )
}

export default Homemain