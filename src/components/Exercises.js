import React, { useEffect, useState } from 'react'
import { Box, Pagination, Stack ,Typography } from '@mui/material'
import ExerciseCard from './ExerciseCard'
import BodyPart from './BodyPart'
import { FetchData,options } from '../utils/FetchData'

function Exercises({exercise,bodyPart,setBodyPart,setExercise}) {
 const [currentPage,setCurrentPage] = useState(1)
 console.log(bodyPart)
 const exercisesPerPage = 9
 const indexOfLastExercise = currentPage * exercisesPerPage;
 const indexOfFirstExercise  = indexOfLastExercise - exercisesPerPage
 const indexOfCurrentExercise = exercise.slice(indexOfFirstExercise,indexOfLastExercise)
const paginate = (e,val) =>{
  setCurrentPage(val) 
  window.scrollTo({top:1800, behavior : "smooth"})
}
useEffect(()=>{
  const fetchExerciseData = async () =>{

  
    let exercisesData = [];
    if(bodyPart === 'all'){
      console.log("works")
  exercisesData = await FetchData('https://exercisedb.p.rapidapi.com/exercises?limit=0',options);
  setExercise(exercisesData)

} else{
  exercisesData = await FetchData (`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}?limit=0`,options)
console.log(exercisesData)
setExercise(exercisesData)

}
}

fetchExerciseData();
}, [bodyPart])
  return (
    <Box mt='20px' sx={{mt: {lg:"110px"}}} pt="20px">
      <Typography ml="40px" variant='h3' mb = "50px">
Showing results
      </Typography>
      <Stack direction= "row" justifyContent= "center" sx={{gap:{lg:'110px', xs:"50px" }}}
      flexWrap="wrap"
      >
      {indexOfCurrentExercise.map((item,i)=>{
        return (
        <ExerciseCard item = {item} index = {i} />
        )
      })}

      </Stack>
      <Stack alignItems="center" mt = "100px">
        {exercise.length > 9 && (
          <Pagination  
          color='standard'
          shape='rounded'
          defaultPage={1}
          count={Math.ceil(exercise.length / exercisesPerPage)}
          page={currentPage}
          onChange={paginate}
          size='large'

          />
        )}

      </Stack>
      
    </Box>
  )
}

export default Exercises
