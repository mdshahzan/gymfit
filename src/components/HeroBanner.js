import React from 'react'
import { Box,Button,Stack,Typography } from '@mui/material'

function HeroBanner() {
  return (
   <Box     sx={{mt:{lg:"212px",xs:"70px"},
   ml:{sm:"50px"}
   
   }} position= "relative" p="20px">
    <Typography  color="#FF2625" fontWeight="600" fontSize="26px"
    >
        Fitness club
    </Typography>
    <Typography mt= "20px" mb="23px" fontWeight={700} sx={{fontSize:{lg:"44px",xs:"28px"}}} >
      Sweat,Smile <br/>
      and Repeat
    </Typography>
    <Typography lineHeight="34px" mb={2} sx={{fontSize:{lg:"24px",xs:"18px"}}}>
      Check out the most effective exercises
    </Typography>
    <Button sx={{backgroundColor:"#ff2625", padding:"12px 15px",fontWeight:"600",fontSize:{lg:"18px",xs:"16px"}}} href='#exercies' variant='contained' color='error' >Explore exercises</Button>
    <Typography fontWeight={600} fontSize="200px" color="#ff2625"
    sx={{opacity:"0.1" , display:{lg:"block",xs:"none"}}}
    >
      Exercise
    </Typography>
    <img src='https://i.pinimg.com/736x/0c/de/64/0cde642b047ceb6034ecc752cd7c1fe9.jpg'
    className='hero-banner-img'
    />

   </Box>
  )
}

export default HeroBanner
