import React, { useEffect, useState } from "react";
import { fetchMovies } from "../api";
import MovieCard from "../components/MovieCard";

const Upcoming = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies("upcoming").then((data) => setMovies(data.results));
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "80px 20px 20px", // ✅ Added top padding to create space before title
        backgroundColor: "#e8f6ff",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          color: "#ff5733",
          marginBottom: "20px", // Ensures some space after the title as well
        }}
      >
        📅 Upcoming Movies
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

export default Upcoming;
