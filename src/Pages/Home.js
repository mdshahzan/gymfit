import { useState } from 'react'
import React from 'react'
import { Box } from '@mui/material'
import HeroBanner from '../components/HeroBanner'
import Exercises from '../components/Exercises'
import SearchExercises from '../components/SearchExercises'


function Home() {
  const [exercise,setExercise] = useState([])
  const [bodyPart, setBodyPart] = useState('all')
  console.log(exercise)

  return (
    <Box>
      <HeroBanner/>
      <SearchExercises setExercise = {setExercise}
      bodyPart ={bodyPart}
      setBodyPart = {setBodyPart}
      />

      <Exercises
      exercise = {exercise}
      setExercise = {setExercise}
      bodyPart ={bodyPart}
      setBodyPart = {setBodyPart}
      />
    </Box>
  )
}

export default Home
