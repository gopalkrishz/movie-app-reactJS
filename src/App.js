import React, { useEffect, useState } from "react"
import "./App.css"
import MoviesCard from "./MoviesCard";
import searchIcon from "./search.svg";
const API_URL ='http://www.omdbapi.com?apikey=(YOUR API KEY)'
function App(){
  const [movies,setMovies] = useState([]);
  const [searchTerm,setSearchTerm] =useState("");
  const seacrhMovies = async (title)=>{
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()
    setMovies(data.Search)
  }
  useEffect(()=>{
    seacrhMovies("spiderman")
  },[]);
  return(
    <div className="app">
    <h1>VintD Movies</h1>

    <div className="search">
      <input placeholder="search"
      value={searchTerm}
      onChange={(e)=>{setSearchTerm(e.target.value)}}>

      </input>
      <img src={searchIcon} 
      alt="search"
      onClick={()=>{seacrhMovies(searchTerm)}}
      />
    </div>
    {
      movies?.length>0?(
        <div className="container">
        {movies.map(function(movie){
          return(
            <MoviesCard movie={movie}/>
          )
        })}
     
      
      </div>

      ):
      (
        <div className="empty">
          <h2>no movies found</h2>
        </div>
      )
    }

    </div>
  )
}
export default App;
