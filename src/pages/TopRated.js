import React, { useEffect, useState } from "react";
import { fetchMovies } from "../api";
import MovieCard from "../components/MovieCard";

const TopRated = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies("top_rated").then((data) => setMovies(data.results));
  }, []);

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#f0f0f0",
        textAlign: "center",
      }}
    >
      <h1
  style={{
    color: "#ff5733",
    textShadow: "2px 2px 5px rgba(255, 87, 51, 0.5)",
    marginTop: "80px", // Adjust spacing above the heading
    marginBottom: "20px", // Keep spacing below the heading
    textAlign: "center",
  }}
>
  ⭐ Top Rated Movies
</h1>
<div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
        }}
      >
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default TopRated;
