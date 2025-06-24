import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axiosInstance from "../utils/axiosInstance";

const MovieCardSection = ({ title, movies = [] }) => {
  //  const [movies, setMovies] = useState([]);

  // useEffect(() => {
  //   axiosInstance
  //     .get("/get-movies", { withCredentials: true })
  //     .then((res) => {
  //       console.log(res.data);
  //       setMovies(res.data);
  //     })
  //     .catch((err) =>
  //       console.log("Error fetching movies", err.response?.data || err.message)
  //     )

  // },[]);

  return (
    <div>
      <div className="card-container mx-[3vw] bg-white h-[35vw]">
        <span className="flex items-center justify-between mt-[4vw] ">
          <p className="text-3xl font-bold">{title}</p>
          <a
            href="http://localhost:3000/movies"
            className="underline text-gray-500"
          >
            see all
          </a>
        </span>

        <div className="grid grid-cols-4 gap-[3vw]">
          {/* <MovieCard imgURL={props.imgTitle}/>
                 <MovieCard imgURL={props.imgTitle}/>
                 <MovieCard imgURL={props.imgTitle}/>
                 <MovieCard imgURL={props.imgTitle}/> */}
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieCardSection;
