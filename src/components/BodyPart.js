import React from 'react'
import { Stack,Typography, } from '@mui/material'


function BodyPart({item,bodyPart,setBodyPart}) {
  return (
    <Stack  onClick = {()=>{
      setBodyPart(item)
      window.scrollTo({top:1800,left:100,behavior:"smooth"})
    }}
    type = 'button'
    alignItems="center"
    justifyContent='center'
    className='bodyPart-card'
    sx={{
      borderTop: bodyPart === item ? "4px solid  #ff2625":"",
      backgroundColor :"#fff",
      width:"270px",
      height:"270px",
      cursor:"pointer",
      gap:"47px"
    }}
    
  
    >
      <img src='https://i.pinimg.com/736x/3f/87/d4/3f87d40040a276d00ac786e0a403b281.jpg'
      style={{width:"100px",height:"100px"}}
      />
<Typography  textTransform='capitalize' style={{fontWeight:"bold",fontSize:"24px"}}>
{item}
</Typography>
    </Stack>
  )
}

export default BodyPart
