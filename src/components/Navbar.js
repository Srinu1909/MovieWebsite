import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [query, setQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search/${query}`);
      setQuery("");
      setMenuOpen(false);
    }
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        width: "100%",
        zIndex: 1000,
        background: "linear-gradient(to right, #141E30, #243B55)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "12px 30px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
        boxSizing: "border-box",
      }}
    >
      {/* Logo */}
      <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
        <Link
          to="/"
          style={{
            fontSize: "30px",
            fontWeight: "bold",
            textDecoration: "none",
            fontFamily: "'Cinzel', serif",
            color: "#F5F5DC",
            display: "flex",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <span
            style={{
              fontWeight: "900",
              fontSize: "35px",
              fontFamily: "'Cinzel Decorative', serif",
              background: "linear-gradient(to right, #FFD700, #1E90FF)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            CineStar
          </span>
          <span
            style={{
              fontSize: "25px",
              color: "#00BFFF",
              textShadow: "0px 0px 15px rgba(0, 191, 255, 0.9)",
            }}
          >
            ⭐
          </span>
        </Link>
      </div>

      {/* Mobile Menu Icon (Hamburger) - Hidden in Desktop */}
      <div
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          display: "none",
          fontSize: "26px",
          cursor: "pointer",
          color: "#F5F5DC",
        }}
        className="mobile-menu-icon"
      >
        ☰
      </div>

      {/* Desktop Navigation Links - Hides in Mobile */}
      <div
        className="nav-links"
        style={{
          display: "flex",
          gap: "40px",
          alignItems: "center",
        }}
      >
        <Link to="/" className="nav-item">
          Home
        </Link>
        <Link to="/top-rated" className="nav-item">
          Top Rated
        </Link>
        <Link to="/upcoming" className="nav-item">
          Upcoming
        </Link>

        {/* Search Bar (Desktop) */}
        <form onSubmit={handleSearch} className="search-bar">
          <input
            type="text"
            placeholder="Search movies..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit">🔍</button>
        </form>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div
          className="mobile-menu"
          style={{
            position: "absolute",
            top: "60px",
            left: "0",
            right: "0",
            background: "#1a1a1a",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
            padding: "20px 0",
            zIndex: 999,
          }}
        >
          <Link
            to="/"
            className="mobile-nav-item"
            style={{
              color: "#1E90FF" /* Blue for Home */,
              fontSize: "18px",
              fontWeight: "bold",
            }}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/top-rated"
            className="mobile-nav-item"
            style={{
              color: "#1E90FF" /* Yellow for Top Rated */,
              fontSize: "18px",
              fontWeight: "bold",
            }}
            onClick={() => setMenuOpen(false)}
          >
            Top Rated
          </Link>
          <Link
            to="/upcoming"
            className="mobile-nav-item"
            style={{
              color: "#1E90FF" /* Red for Upcoming */,
              fontSize: "18px",
              fontWeight: "bold",
            }}
            onClick={() => setMenuOpen(false)}
          >
            Upcoming
          </Link>

          {/* Mobile Search Bar */}
          <form onSubmit={handleSearch} className="mobile-search">
            <input
              type="text"
              placeholder="Search movies..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit">🔍</button>
          </form>
        </div>
      )}

      {/* Styles */}
      <style>
        {`
          /* Desktop Navbar Styling */
          .nav-item {
            text-decoration: none;
            font-size: 20px;
            font-weight: bold;
            font-family: 'Cinzel Decorative', serif;
            background: linear-gradient(to right, #1E90FF, #00BFFF);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          .search-bar {
            display: flex;
            align-items: center;
            background: #222;
            padding: 6px 12px;
            border-radius: 20px;
          }

          .search-bar input {
            border: none;
            outline: none;
            background: transparent;
            color: white;
            font-size: 14px;
            width: 160px;
          }

          .search-bar button {
            background: transparent;
            border: none;
            color: #00A8E1;
            font-size: 16px;
            cursor: pointer;
          }

          /* Mobile Styling */
          @media (max-width: 768px) {
            .nav-links {
              display: none !important;
            }

            .mobile-menu-icon {
              display: block !important;
            }

            .mobile-menu {
              position: absolute;
              top: 60px;
              left: 0;
              right: 0;
              background: #1a1a1a;
              display: flex;
              flex-direction: column;
              align-items: center;
              gap: 20px;
              padding: 20px 0;
              z-index: 999;
            }

            .mobile-nav-item {
              color: white;
              font-size: 18px;
              text-decoration: none;
              padding: 10px;
              width: 100%;
              text-align: center;
            }

            .mobile-search input {
              border: none;
              outline: none;
              padding: 8px;
              border-radius: 5px;
              font-size: 16px;
            }

            .mobile-search button {
              margin-left: 10px;
              font-size: 16px;
            }
          }
        `}
      </style>
    </nav>
  );
};

export default Navbar;
