import React, { useState, useEffect } from "react";
import "../styles/Row.css";
import axios from "../axios";
import requests from "../requests";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);

  // A snippet of code which runs based on a specific condition/variable
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      // "https://api.themoviedb.org/3",
      //   console.log(request.data.results);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  // console.table(movies); // we can use quokka extension to print the consoles in a nice format.

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {/* serveral row__posters */}
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>

      {/* title */}
      {/* container -> posters */}
    </div>
  );
}

export default Row;
