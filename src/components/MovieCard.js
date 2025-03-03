import React from "react";
import { IMAGE_BASE_URL } from "../api";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div
      style={{
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
        background: "linear-gradient(to bottom, #222, #444)",
        transition: "transform 0.3s, box-shadow 0.3s",
        cursor: "pointer",
        margin: "15px",
        position: "relative",
        minWidth: "180px", // More flexibility
        maxWidth: "220px",
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = "scale(1.05)";
        e.currentTarget.style.boxShadow = "0px 8px 15px rgba(0,0,0,0.5)";
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0px 4px 10px rgba(0,0,0,0.3)";
      }}
    >
      <Link
        to={`/movie/${movie.id}`}
        style={{
          textDecoration: "none",
          color: "white",
          display: "block",
          textAlign: "center",
        }}
      >
        <img
          src={movie.poster_path ? `${IMAGE_BASE_URL}${movie.poster_path}` : "https://via.placeholder.com/200x300?text=No+Image"}
          alt={movie.title}
          style={{
            width: "100%",
            borderRadius: "12px 12px 0 0",
            transition: "opacity 0.3s",
          }}
          onMouseOver={(e) => (e.currentTarget.style.opacity = "0.8")}
          onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
        />
        <div
          style={{
            padding: "10px",
            background: "rgba(0, 0, 0, 0.8)",
            position: "absolute",
            bottom: "0",
            width: "100%",
            textAlign: "center",
            minHeight: "50px", // Prevents text from being cut off
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h3
            style={{
              fontSize: "13px",
              fontWeight: "bold",
              margin: "0",
              color: "#ffcc00",
              textShadow: "1px 1px 5px rgba(0,0,0,0.7)",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              width: "90%",
            }}
            title={movie.title} // Tooltip on hover for full title
          >
            {movie.title}
          </h3>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
