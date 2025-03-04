import React, { useEffect, useState } from "react";
import { fetchMovies } from "../api";
import MovieCard from "../components/MovieCard";
import ReactPaginate from "react-paginate";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const moviesPerPage = 8;

  useEffect(() => {
    fetchMovies("popular").then((data) => setMovies(data.results));

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

  // Pagination logic
  const pageCount = Math.ceil(movies.length / moviesPerPage);
  const displayedMovies = movies.slice(
    currentPage * moviesPerPage,
    (currentPage + 1) * moviesPerPage
  );

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

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
        background: "linear-gradient(to right, #f0f0f0, #f0f0f0)",
        fontFamily: "'Poppins', serif",
        padding: "0",
        margin: "0",
        boxSizing: "border-box",
        overflowX: "hidden",
        overflowY: "auto",
      }}
    >
      <h1
        style={{
          color: "#ff5733",
          textShadow: "2px 2px 5px rgba(255, 87, 51, 0.5)",
          marginTop: "120px",
          marginBottom: "20px",
          textAlign: "center",
          fontFamily: "'Cinzel Decorative', serif",
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
          maxWidth: "1200px",
        }}
      >
        {displayedMovies.map((movie) => (
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
      {/* Pagination Component */}

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

      {/* Inline CSS for Pagination */}
      <style>
        {`
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
      flex-wrap: wrap; /* Ensures buttons stay inside */
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
      min-width: 75px; /* Ensures width consistency */
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

    /* Fix for Inspect Mode (Small Screens) */
    @media screen and (max-width: 768px) {
      .pagination {
        flex-wrap: wrap;
        padding: 10px;
        gap: 4px; /* Reduces gap to prevent overflow */
      }

      .prev-next {
        min-width: 65px; /* Ensures button fits */
        font-size: 14px;
        padding: 6px 10px;
      }

      .page-link {
        padding: 6px 10px; /* Adjust padding for small screens */
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

export default Home;
