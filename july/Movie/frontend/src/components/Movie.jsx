import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const Movie = () => {
  const params = useParams();
  const api = import.meta.env.VITE_IMDB_API;
  const [movieDetails, setMovieDetails] = useState({});

  const handelGetMovie = async () => {
    try {
      const url = api + "&i=" + params.id;
      const result = await axios.get(url);

      if (result?.data) {
        setMovieDetails(result.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handelGetMovie();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-4xl w-full flex flex-col md:flex-row overflow-hidden">
        <div className="md:w-1/3">
      <img src={movieDetails?.Poster} 
      alt=""
      className="w-full h-full object-cover" />
      </div>
      {/* <p >{movieDetails.Title}</p> */}
       <h2 className="text-3xl font-bold text-gray-800">
            {movieDetails.Title}
          </h2>
      {/* <p>{movieDetails.Year}</p> */}
       <p className="text-gray-600 text-lg">
            <span className="font-semibold">Year:</span> {movieDetails.Year}
          </p>
      {/* <p>{movieDetails.Type}</p> */}
      <p className="text-gray-600 text-lg">
            <span className="font-semibold">Type:</span> {movieDetails.Type}
          </p>
      {/* <p>{movieDetails.imdbID}</p> */}
      <p className="text-gray-600 text-lg">
            <span className="font-semibold">IMDB ID:</span> {movieDetails.imdbID}
          </p>

      
    
    </div>
    </div>
  );
};

export default Movie;