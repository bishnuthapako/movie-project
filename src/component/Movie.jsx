import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";

const Movie = () => {
  const [movieName, setMovieName] = useState("titanic");
  const [movieData, setMovieData] = useState(null); // Initialize to null for a single movie

  const getMovieName = async (title) => {
    try {
      const response = await axios.get(
        `http://www.omdbapi.com/?t=${title}&apikey=5a6f9f83`
      );
      setMovieData(response.data); // Update state with the API response, which is an object
    } catch (error) {
      console.error("Failed to fetch movie data:", error);
    }
  };

  useEffect(() => {
    getMovieName(movieName);
  }, [movieName]);

  const handleMovieButton = () => {
    getMovieName(movieName);
  };

  return (
    <div className="m-2 lg:m-4 w-auto lg:w-[650px] h-auto bg-slate-800 dark:bg-slate-700 rounded-lg shadow-md">
      <main className="p-4">
        <div className="relative max-w-sm mx-auto mt-5 lg:mt-10">
          <input
            className=" w-80 lg:w-full py-2 px-4 border-1 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            type="search"
            placeholder="Search"
            name="movieName"
            value={movieName}
            onChange={(e) => setMovieName(e.target.value)}
          />
          <button
            onClick={handleMovieButton}
            className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-700 bg-gray-100 border border-gray-300 rounded-r-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <ion-icon className="w-60 h-60" name="search"></ion-icon>
          </button>
        </div>
      </main>
      {/* Check if movieData exists and pass it to the Card component */}
      {movieData && <Card movie={movieData} />}
    </div>
  );
};

export default Movie;
