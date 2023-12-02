import React, { useEffect, useState } from 'react'
import axios from "axios"
import "./home.css"
import MovieCard from '../../components/MovieCard'
import { useSearchParams } from 'react-router-dom'



function Home() {
  const [movieData,setMovieData]=useState([])
  const [sort,setSort]=useState("")
  const [search,setSearch]=useSearchParams()

  console.log(search.get("search"))
 

  const getData=(url)=>{
    axios.get(url)
    .then((res)=>{
      let newData=res.data.Search.map((ele,ind)=>{
        console.log(ele.Year.length)
        if(ele.Year.length<5){
          
          ele.Year=Number(ele.Year)
          return ele
        }else{
          var startYearSlice = ele.Year.slice(0, 4);
          ele.Year=Number(startYearSlice)
          return ele
        }
      })
      console.log(newData)
      setMovieData(res.data.Search)
    })
  }
  

  const handleSort=(e)=>{
    console.log(e.target.value)
    const sortValue=e.target.value;
    setSort(e.target.value)

    if(sortValue==="asc"){
      let ascData=movieData.sort((a,b)=>a.Year-b.Year)
      console.log("ascData",ascData)
      setMovieData(ascData)

    }else{
      let descData=movieData.sort((a,b)=>b.Year-a.Year)
      console.log('desscDATa',descData)
      setMovieData(descData)
    }
  }


  useEffect(()=>{
      getData("http://www.omdbapi.com/?apikey=a269a908&s=movies")
  },[])


  const handleSelect=(e)=>{
    getData(`http://www.omdbapi.com/?apikey=a269a908&s=movies&type=${e.target.value}`)
  }

  

  

  return (
    <div className='home'>

     <div className='sidebar'>
      <div className='sort-by-year' onChange={handleSort}>
        <h3>Sort By Year
        </h3>
        <lable>Ascending</lable>
        <input value={'asc'} type='radio' name="sort"/>
        <lable>Descending</lable>
        <input value={"desc"} type='radio' name='sort' />
      </div>
      <hr/>
      <div className='filter-by-type'>
        <h3>Filter By Type</h3>
        <select onChange={handleSelect}>
          <option value="">Select Type</option>
          <option value="movie">Movie</option>
          <option value="series">Series</option>
        </select>
      </div>
     </div>


     <div className='movies'>
       {movieData.map((ele,ind)=>{
        return (
          <MovieCard
            kye={ind}
            {...ele}
          />
        )
       })}
     </div>
    </div>
  )
}

export default Home
