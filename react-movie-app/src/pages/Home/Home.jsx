import React, { useEffect, useState } from 'react'
import axios from "axios"
import "./home.css"
import MovieCard from '../../components/MovieCard'




function Home() {
  const [movieData,setMovieData]=useState([])
  const [sort,setSort]=useState("")
  const [searchQuery, setSearchQuery] = useState('');

  
 
  
  const getData=(url)=>{
    axios.get(url)
    .then((res)=>{
      if(res.data.Search===undefined){

        alert("result not found")
        return 
      }
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
    const apiUrl = `http://www.omdbapi.com/?apikey=a269a908&s=movies`;
    getData(apiUrl);
  },[])


  const handleSearchChange=(e)=>{
    const {value}=e.target;
    setSearchQuery(value)
  }

  
  const handleSelect=(e)=>{
    getData(`http://www.omdbapi.com/?apikey=a269a908&s=movies&type=${e.target.value}`)
  }

  
  const handleSearch=()=>{
    console.log(searchQuery)
    getData(`http://www.omdbapi.com/?apikey=a269a908&s=${searchQuery}`)
    setSearchQuery("")
  }
  

  return (
    <>
    <div className="search-bar">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button onClick={handleSearch}>🔍</button>
      </div>
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
       {movieData.length?movieData.map((ele,ind)=>{
        return (
          <MovieCard
            kye={ind}
            {...ele}
          />
        )
       }):<h2>Result Not Fond</h2>
      
      }
     </div>
    </div>
    </>
  )
}

export default Home
