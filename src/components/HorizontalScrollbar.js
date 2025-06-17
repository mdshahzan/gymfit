import { Box } from '@mui/material'
import React from 'react'
import BodyPart from './BodyPart'
import {ScrollMenu} from 'react-horizontal-scrolling-menu'


function HorizontalScrollbar({data,bodyPart,setBodyPart}) {
  
  return (
    <ScrollMenu>
    
        {data.map((item)=>{
            return (
                <Box
                key={item.id || item.name}
                itemId={item.id || item.name}
                title={item.id || item.name}
                m={"0 40px"}
                >
                    <BodyPart item = {item} bodyPart ={bodyPart} setBodyPart ={setBodyPart}/>

                </Box>
            )

        })}
      
    </ScrollMenu>
  )
}

export default HorizontalScrollbar
