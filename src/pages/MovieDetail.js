import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetails, fetchMovieCast, IMAGE_BASE_URL } from "../api";

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchMovieDetails(id).then(setMovie);
    fetchMovieCast(id).then(setCast);
  }, [id]);

  if (!movie)
    return (
      <h1 style={{ textAlign: "center", marginTop: "50px", color: "#ffcc00" }}>
        Loading...
      </h1>
    );

  return (
    <div
      style={{
        backgroundColor: "#141414",
        color: "white",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
        paddingTop: "80px", // Space for navbar
        paddingBottom: "50px", // Extra spacing at bottom
      }}
    >
      {/* BACKDROP IMAGE & MOVIE DETAILS */}
      <div
        style={{
          background: `linear-gradient(to right, rgba(20, 20, 20, 0.9), rgba(10, 10, 30, 0.7)), url(${IMAGE_BASE_URL}${movie.backdrop_path})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "60px 10%",
          display: "flex",
          alignItems: "center",
          flexDirection: "row", // Default desktop layout
        }}
      >
        {/* MOVIE POSTER */}
        <img
          src={`${IMAGE_BASE_URL}${movie.poster_path}`}
          alt={movie.title}
          style={{
            width: "260px",
            borderRadius: "12px",
            boxShadow: "0px 5px 15px rgba(255, 204, 0, 0.5)",
            border: "3px solid #ffcc00",
          }}
        />

        {/* MOVIE DETAILS */}
        <div style={{ marginLeft: "40px", maxWidth: "600px" }}>
          <h1
            style={{
              fontSize: "32px",
              fontWeight: "bold",
              marginBottom: "12px",
              color: "#00A8E1",
              textShadow: "2px 2px 10px rgba(0, 168, 225, 0.5)",
            }}
          >
            {movie.title}
          </h1>
          <p style={{ fontSize: "16px", opacity: "0.9", color: "#ddd" }}>
            ⭐ <span style={{ color: "#ffcc00" }}>{movie.vote_average}</span> |
            ⏳ {movie.runtime} min | 🎭{" "}
            <span style={{ color: "#ff5733" }}>
              {movie.genres.map((g) => g.name).join(", ")}
            </span>
          </p>
          <p style={{ fontSize: "16px", opacity: "0.9", color: "#ddd" }}>
            📅 Release Date:{" "}
            <span style={{ color: "#00ffcc" }}>{movie.release_date}</span>
          </p>

          {/* OVERVIEW */}
          <h2
            style={{
              marginTop: "20px",
              fontSize: "20px",
              color: "#ffcc00",
              textShadow: "1px 1px 5px rgba(255, 204, 0, 0.5)",
            }}
          >
            Overview
          </h2>
          <p style={{ lineHeight: "1.6", fontSize: "16px", opacity: "0.9" }}>
            {movie.overview}
          </p>
        </div>
      </div>

      {/* CAST SECTION */}
      <div style={{ margin: "60px auto 80px", textAlign: "center" }}>
        <h2
          style={{
            fontSize: "24px",
            color: "#ffcc00",
            textShadow: "1px 1px 5px rgba(255, 204, 0, 0.5)",
            marginBottom: "20px",
          }}
        >
          🎭 Cast
        </h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
            padding: "0 10%",
          }}
        >
          {cast.slice(0, 8).map((actor) => (
            <div
              key={actor.id}
              style={{
                textAlign: "center",
                width: "130px",
                padding: "12px",
                background:
                  "linear-gradient(145deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))",
                borderRadius: "10px",
                boxShadow: "0px 5px 10px rgba(255, 204, 0, 0.3)",
                transition: "transform 0.3s",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <img
                src={`${IMAGE_BASE_URL}${actor.profile_path}`}
                alt={actor.name}
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  border: "3px solid #ffcc00",
                  boxShadow: "0px 4px 8px rgba(255, 204, 0, 0.4)",
                }}
              />
              <p
                style={{
                  fontSize: "14px",
                  marginTop: "8px",
                  color: "#ffcc00",
                  fontWeight: "bold",
                }}
              >
                {actor.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* MEDIA QUERY FOR MOBILE VIEW - ONLY AFFECTS INSPECT MODE */}
      <style>
        {`
          @media (max-width: 768px) {
            div[style*="flex-direction: row"] {
              flex-direction: column !important;
              text-align: center;
              padding: 30px 5%;
            }

            img[alt="${movie.title}"] {
              width: 200px !important;
              margin: 0 auto 20px;
            }

            div[style*="marginLeft: 40px"] {
              margin-left: 0 !important;
            }

            div[style*="maxWidth: 600px"] {
              max-width: 100% !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default MovieDetail;
