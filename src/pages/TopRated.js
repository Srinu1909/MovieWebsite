import React, { useEffect, useState } from "react";
import { fetchMovies } from "../api";
import MovieCard from "../components/MovieCard";
import ReactPaginate from "react-paginate";

const TopRated = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const moviesPerPage = 8;

  useEffect(() => {
    fetchMovies("top_rated").then((data) => setMovies(data.results));
  }, []);

  // Pagination logic
  const pageCount = Math.ceil(movies.length / moviesPerPage);
  const displayedMovies = movies.slice(
    currentPage * moviesPerPage,
    (currentPage + 1) * moviesPerPage
  );

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
          marginTop: "80px",
          marginBottom: "20px",
          textAlign: "center",
        }}
      >
        ⭐ Top Rated Movies
      </h1>

      {/* Movies Grid (Ensuring Consistency with Home.js) */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)", // Ensures exactly 4 movies per row
          gap: "20px",
          justifyContent: "center",
          alignItems: "center",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "20px",
        }}
      >
        {displayedMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      {/* Pagination Component */}
      <ReactPaginate
        previousLabel={
          <span
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              color: currentPage === 0 ? "rgba(0, 0, 0, 0.3)" : "black",
            }}
          >
            <span style={{ fontSize: "18px" }}>⬅</span> Previous
          </span>
        }
        nextLabel={
          <span
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              color:
                currentPage === pageCount - 1 ? "rgba(0, 0, 0, 0.3)" : "black",
            }}
          >
            Next <span style={{ fontSize: "18px" }}>➡</span>
          </span>
        }
        pageCount={pageCount}
        onPageChange={(selectedPage) => {
          setCurrentPage(selectedPage.selected);
          window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top smoothly
        }}
        containerClassName="pagination"
        activeClassName="active"
        pageLinkClassName="page-link"
        previousLinkClassName="page-link prev-next"
        nextLinkClassName="page-link prev-next"
        breakLabel="..."
        breakClassName="break"
      />

      {/* Inline CSS Fixes for Inspect Mode */}
      <style>
        {`
          /* 🔹 Fix for Inspect Mode (Movies Stay Intact) */
          @media screen and (max-width: 1024px) {
            div[style*="grid-template-columns: repeat(4, 1fr)"] {
              grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)) !important;
            }
          }

          /* Pagination Styles */
          .pagination {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 5px;
            padding: 12px 20px;
            margin-top: 20px;
            list-style: none;
            font-size: 16px;
            font-weight: bold;
            background: white;
            border-radius: 10px;
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
            max-width: 100%;
            flex-wrap: wrap;
          }

          .page-link {
            text-decoration: none;
            color: black;
            background: white;
            border: 1px solid #ddd;
            padding: 10px 14px;
            font-weight: bold;
            transition: all 0.3s ease-in-out;
            border-radius: 5px;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .page-link:hover {
            background: #f3f3f3;
          }

          .active .page-link {
            background: black;
            color: white;
            border: 1px solid black;
          }

          .prev-next {
            font-weight: bold;
            border: 1px solid #ddd;
            background: white;
            padding: 8px 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            min-width: 75px;
            text-align: center;
          }

          .prev-next:hover {
            background: #f3f3f3;
          }

          .break {
            padding: 10px;
            color: black;
            font-weight: bold;
          }

          /* Fix for Inspect Mode Pagination */
          @media screen and (max-width: 768px) {
            .pagination {
              flex-wrap: wrap;
              padding: 10px;
              gap: 4px;
            }

            .prev-next {
              min-width: 65px;
              font-size: 14px;
              padding: 6px 10px;
            }

            .page-link {
              padding: 6px 10px;
              font-size: 14px;
            }
          }

          /* Desktop: Pagination matches movie row width */
          @media screen and (min-width: 1024px) {
            .pagination {
              width: 80%;
              margin: 20px auto;
            }
          }
        `}
      </style>
    </div>
  );
};

export default TopRated;
