import React from 'react'
import Home from './Pages/Home'
import "./App.css"
import { Route,Routes } from 'react-router-dom'
import { Box } from '@mui/material'
import ExerciseDetails from './Pages/ExerciseDetails'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Generate from './Pages/Generate'
function App() {
  return (
    <Box width= "400px" sx={{width:{xl:'1488px'}}}m='auto'>
      <Navbar/>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/exercises/:id' element = {<ExerciseDetails/>}/>
        <Route path='/exercises' element = {<Generate/>}/>

      </Routes>
     
    </Box>
  )
}

export default App
