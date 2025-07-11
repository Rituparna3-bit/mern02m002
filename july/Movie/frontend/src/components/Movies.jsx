import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router';

const Movies = () => {

    const [moviesData,setMoviesData] = useState([]);
    const [Search, setSearch] = useState("");
    //console.log(search);

    const api = import.meta.env.VITE_IMDB_API;
    const navigate= useNavigate();

    const getMovies = async (s = "all") => {
        try{
            const url=api+ "&s=" +s;
            //console.log(url);
           const result=await axios.get(url)
            //console.log(result.data);
        
            if (result.data.Response ==="True"){
                setMoviesData(result.data.Search);
            }

        }catch (err) {
            console.log(err)
        }
    };

    useEffect(()=> {
        getMovies();
    },[]);
    const handleSearch =() => {
        getMovies(Search)
    }
  
  return (
    <div>

        <input
         type="text" 
         value={Search}
         className='border'
         onChange={(e)=>{
            setSearch(e.target.value)
        }}
        />
        <button className="bg-blue-500 px-6" onClick={handleSearch}>
          search
        </button>
      <div>
        
         { moviesData?.length >0 && 
         moviesData.map((ele,i) => (
         <div key={ele.imdbID}
          onClick={()=>{
         navigate(`/movie/${ele.imdbID}`);
         }}
         >
            <img src={ele.Poster} alt={ele.Title}/>
            <p>{ele.Title}</p>
            <p>{ele.Year}</p>
            <p>{ele.Type}</p>

         </div>
        )) }
        
      </div>
    </div>
  )
}

export default Movies
