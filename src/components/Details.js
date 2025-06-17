import React from 'react'
import { Typography,Stack,Button } from '@mui/material'


function Details({exerciseDetail}) {
    const {name, gifUrl, target, bodyPart, equipment, description} = exerciseDetail
  return (
    <Stack gap = "60px" p = '20px' sx={{flexDirection:{lg:'row'},alignItems:'center'}}>
      <img src={gifUrl} alt={name} loading='lazy' className='detail-image'/>
      <Stack sx={{gap:{lg:'35px',xs:'20px'}}}>
        <Typography variant='h3' textTransform='capitalize'>
          {name}
        </Typography>
        <Typography variant='h6' color='#4F4C4C'>
          Exercises keep you strong. {name}  {description}
        </Typography>
        <Stack direction='row' gap = '24px' alignItems='center'>
          <Button sx={{background:'#fff2db',borderRadius:'10px',padding:'14px'}}>
            {bodyPart}
          </Button>
          <Button sx={{background:'#fff2db',borderRadius:'10px',padding:'14px'}}>
            {target}
          </Button>
        </Stack>
        <Typography variant='h6' color='#4F4C4C'>
          Equipment: {equipment}
        </Typography>
      </Stack>

    </Stack>
  )
}

export default Details
