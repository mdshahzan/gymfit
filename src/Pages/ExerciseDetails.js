import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import {Box} from '@mui/material'
import { FetchData,options,youtubeOptions } from '../utils/FetchData'
import Details from '../components/Details'
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExercises from '../components/SimilarExercises'

function ExerciseDetails() {
  const [exerciseDetail, setExerciseDetail] = useState({})
  const [exerciseVideos, setExerciseVideos] = useState([])
  const [similarExercisesData,setSimilarExerciseData] = useState([])

  const {id} = useParams()
  useEffect(() => {
    const fetchExerciseData = async () => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl =  'https://youtube-search-and-download.p.rapidapi.com/search'
  
      const exerciseDetailData = await FetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, options);
      setExerciseDetail(exerciseDetailData);
      const exerciseVideosData = await FetchData(`${youtubeSearchUrl}?query=${encodeURIComponent(exerciseDetailData.name)}`, youtubeOptions);
  
      setExerciseVideos(exerciseVideosData.contents)
      const relatedExercises = await FetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetail.target}`,options)
      setSimilarExerciseData(relatedExercises);
     
    };
    fetchExerciseData();
  }, [id]);
  
  return (
    <Box>
      <Details exerciseDetail = {exerciseDetail}/>
      <ExerciseVideos exerciseVideos = {exerciseVideos} name = {exerciseDetail.name}/>
    </Box>
  )
}

export default ExerciseDetails
