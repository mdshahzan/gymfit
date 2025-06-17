import React, { useState,useEffect } from 'react'
import { Box,Stack,Button,Typography,TextField } from '@mui/material'
import { options,FetchData } from '../utils/FetchData'
import HorizontalScrollbar from './HorizontalScrollbar'

function SearchExercises({setExercise,bodyPart,setBodyPart}) {
  


  const [search,setSearch] =useState("") 
  const [bodyParts,setbodyParts] = useState([])
  console.log(bodyPart)


  useEffect(()=>{
const fetchExerciseData = async()=>{
  const bodyPartsData = await FetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',options);
setbodyParts(['all',...bodyPartsData])
}
fetchExerciseData();
  },[])
  const handleSearch = async()=>{
    if(search){
      const exerciseData = await FetchData('https://exercisedb.p.rapidapi.com/exercises?limit=0',options);
      const searchedExercises = exerciseData.filter((exercise)=>
        exercise.name.toLowerCase().includes(search)
      || exercise.bodyPart.toLowerCase().includes(search)
      || exercise.equipment.toLowerCase().includes(search)
      || exercise.target.toLowerCase().includes(search)
      );
      setExercise(searchedExercises);
      

    } 
  }
  return (
    <Stack p="20px"  mb="52px" mt="70px" alignItems="center" justifyContent="center" >
      <Typography fontWeight={700} sx={{
        fontSize:{lg:"50px",xs:"30px"},
        textAlign:"center"
        
      }}>
        Awesome Exercises You <br/>
        Should Know
      </Typography>
      <Box mt="50px" position="relative" mb="72px">

      <TextField 
      sx={{
        input:{
          fontWeight:"700",
          borderRadius:"4px"
        },
        width:{lg:"1170px",xs:"370px"},
        background:"#fff",
        borderRadius:"50px",
        border:"none",
        
      }} 
      placeholder='Search Exercises'
      value={search}
      onChange={(e)=>{
        setSearch(e.target.value.toLowerCase())
      }}
      type='text'
      height="76px"
      />
      <Button className='search-btn' sx={{
        width:{lg:"180px",xs:"90px"},
        border:"none",
        bgcolor:"#ff2625",
        color:"#fff",
        fontSize:"18px",
        borderRadius:"5px",
        position:"absolute",
        
        height:"56px",
        right:"0"
        
        
      }} onClick={()=>{
        handleSearch()
        setTimeout(() => {
          window.scrollTo({ top: 1800, behavior: "smooth" });
        }, 1000);
        
      }} 
      
      >
        Search

      </Button>
      
        </Box>
        <Box sx={{position:"relative",width:"100%" , p:"20px"}}>
          <HorizontalScrollbar data = {bodyParts}
          bodyPart = {bodyPart}
          setBodyPart = {setBodyPart}
          
          
          />

        </Box>
    </Stack>
  )
}

export default SearchExercises
