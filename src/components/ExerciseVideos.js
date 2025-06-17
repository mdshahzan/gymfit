import { Typography,Box, Stack } from '@mui/material'
import React from 'react'

function ExerciseVideos({exerciseVideos, name}) {
  return (
    <Box sx = {{marginTop: {kg:'200px', xs:"20px"}}} p = '20px'>
        <Typography variant='h3' mb = '33px'>
            Watch <span style={{color:"#ff2625",textTransform:"capitalize"}} >{name}</span> exercise
        </Typography>
        <Stack justifyContent="center" flexWrap="wrap" alignItems="center" gap="80px" sx={{flexDirection:{lg:'row',xs:'column'}}}>
            {exerciseVideos.slice(0,6).map((item,index)=>{
                
                return (
                    <a key={index} className='exercise-video' href={`https://youtube.com/watch?v=${item.video.videoId}`} target="_blank" rel="noreferrer">
                        <img src={item.video.thumbnails[0].url} alt={item.video.title} />
                        <Box>
                            <Typography variant='h5' color="#000" fontWeight="bold" textTransform="capitalize">
                                {item.video.title}
                            </Typography>
                            <Typography variant='h6' color="#000" fontWeight="bold" textTransform="capitalize">
                                {item.video.channelName}
                            </Typography>
                        </Box>
                    </a>
                )
            })}


        </Stack>

    </Box>
  )
}

export default ExerciseVideos
