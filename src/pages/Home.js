import React, { useEffect, useState } from "react";
import { fetchMovies } from "../api";
import MovieCard from "../components/MovieCard";

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies("popular").then((data) => setMovies(data.results));

    // Fix horizontal scrolling issues
    document.documentElement.style.overflowX = "hidden";
    document.body.style.overflowX = "hidden";
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.documentElement.style.margin = "0";
    document.documentElement.style.padding = "0";
    document.documentElement.style.width = "100vw";
    document.body.style.width = "100vw";

    return () => {
      document.documentElement.style.overflowX = "auto";
      document.body.style.overflowX = "auto";
    };
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        background: "linear-gradient(to right,#f0f0f0 , #f0f0f0)",
        fontFamily: "'Poppins', serif",
        padding: "0",
        margin: "0",
        boxSizing: "border-box",
        overflowX: "hidden", // Prevents horizontal scroll
        overflowY: "auto",
      }}
    >
      {/* Title with spacing */}
      <h1
        style={{
          color: "#ff5733",
          textShadow: "2px 2px 5px rgba(255, 87, 51, 0.5)",
          marginTop: "120px", // Increased spacing before the title
          marginBottom: "20px", // Keep spacing below the title
          textAlign: "center",
          fontFamily: "'Cinzel Decorative', serif", // Stylish font
        }}
      >
        🎬 Popular Movies
      </h1>

      {/* Movies Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          padding: "20px",
          width: "100%",
          maxWidth: "1200px", // Keeps layout centered and prevents overflow
        }}
      >
        {movies.map((movie) => (
          <div
            key={movie.id}
            style={{
              transition: "transform 0.3s ease-in-out, box-shadow 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow =
                "0px 5px 15px rgba(255, 204, 0, 0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
