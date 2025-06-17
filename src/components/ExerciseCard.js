import React from 'react'
import { Link } from 'react-router-dom'
import { Button , Stack ,Typography } from '@mui/material'
function ExerciseCard({item,index}) {
  console.log(item)
  return (
    <Link className='exercise-card' to={`/exercises/${item.id}`}>
        <img src= {item.gifUrl} loading='lazy' />
        <Stack direction='row'>
        <Button  style={{marginLeft:"20px",marginBottom:"10px",borderRadius:"12px"}} variant="outlined">{item.target}</Button>
        <Button style={{marginLeft:"20px",marginBottom:"10px",borderRadius:"12px"}} variant='outlined' color="secondary">{item.secondaryMuscles[0]}</Button>


        </Stack>
        <Typography fontWeight='700' color="#000" ml = "21px" fontSize="20px" textTransform= "capitalize">
          {item.name}
        </Typography>
      
    </Link>
  )
}

export default ExerciseCard
