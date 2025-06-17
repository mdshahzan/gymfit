import React from 'react'
import { Box, Stack } from '@mui/material'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
   <Box>
    <Stack   
    direction= 'row'
    justifyContent= 'space-around'
    sx = {{gap:{sm:'122px',xs:'40px'},mt:{sm:"32px",xs:"20px"},justifyContent:"none"}}
    
    >
        <Link to="/">
        <img src='https://i.pinimg.com/736x/42/9d/63/429d631659a11a9eb666b103d811470a.jpg' style={{width:"68px",height:"68px",margin:"0 20px"}}
        />
        </Link>
        <Stack direction='row' gap= '40px'
        alignItems='flex-end'
        >
            <Link to='/'
            style={{
                textDecoration:"none",
                color:"#3A1212",fontSize:"24px",borderBottom:"3px solid #FF2625"
            }}
            >Home</Link>
            <Link to="/exercises" className='generate-btn' style={{
                textDecoration:"none",
                color:"#3A1212",fontSize:"24px"
            }}  >Generate Exercises</Link>
        </Stack>
    </Stack>
   </Box>
  )
}

export default Navbar
