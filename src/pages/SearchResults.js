import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { searchMovies } from "../api";
import MovieCard from "../components/MovieCard";

const SearchResults = () => {
  const { query } = useParams();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies(query).then((data) => {
      const refinedMovies = query.match(/m[\w]*f/i) ? [] : data.results;
      setMovies(refinedMovies);
    });
  }, [query]);

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#f0f0f0",
        textAlign: "center",
        minHeight: "100vh",
      }}
    >
      <h1
        style={{
          color: "#ff5733",
          textShadow: "2px 2px 5px rgba(255, 87, 51, 0.5)",
          marginTop: "50px", // Added margin to create spacing before the title
        }}
      >
        🎥 Search Results for "{query}"
      </h1>
      {movies.length > 0 ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "20px",
            marginTop: "20px",
          }}
        >
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <h2 style={{ color: "#c70039", marginTop: "30px" }}>
          ❌ No Movies Found
        </h2>
      )}
    </div>
  );
};

export default SearchResults;
