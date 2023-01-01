import React, { useState } from 'react';
import { Box } from '@mui/material';

import Exercises from '../Component/Excercise';
// import SearchExercises from '../components/SearchExercises';
import HeroBanner from '../Component/HeroBanner';
import SearchExercises from '../Component/SearchExercise';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');

  return (
    <Box>
      <Navbar/>
      <HeroBanner />
      <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      <Exercises setExercises={setExercises} exercises={exercises} bodyPart={bodyPart} />
      <Footer/>
    </Box>
  );
};

export default Home;
