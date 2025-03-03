import React from "react";

const Pagination = ({ page, setPage }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center", margin: "20px 0" }}>
      <button 
        disabled={page === 1} 
        onClick={() => setPage(page - 1)} 
        style={{ padding: "10px", background: "#c70039", color: "white", border: "none", borderRadius: "5px", marginRight: "10px", cursor: "pointer" }}>
        ⬅️ Prev
      </button>
      <span style={{ fontSize: "18px", fontWeight: "bold", color: "#333" }}>Page {page}</span>
      <button 
        onClick={() => setPage(page + 1)} 
        style={{ padding: "10px", background: "#ff5733", color: "white", border: "none", borderRadius: "5px", marginLeft: "10px", cursor: "pointer" }}>
        Next ➡️
      </button>
    </div>
  );
};

export default Pagination;
