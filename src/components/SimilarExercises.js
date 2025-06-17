import React from 'react'
import HorizontalScrollbar from './HorizontalScrollbar'
import {Box,Stack,Typography} from '@mui/material'  

function SimilarExercises({similarExercisesData}) {
  return (
    <Box sx={{mt:{lg:'70px',xs:'0'}}}>
        <Typography variant='h3'  mb={5}>

            Similar Exercises

        </Typography>
        <Stack sx={{gap:{lg:'60px',xs:'20px'}}}>
            
        </Stack>


    </Box>
  )
}

export default SimilarExercises
