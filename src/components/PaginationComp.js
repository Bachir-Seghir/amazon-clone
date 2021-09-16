import React, { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import "../styles/Pagination.css";

function PaginationComp({ currentPage }) {
  useEffect(() => {
    setPage(currentPage);
  }, [currentPage]);
  const [page, setPage] = useState(currentPage);
  const handleChange = (event, value) => {
    setPage(value);
  };
  return (
    <div className="pagination-wrap">
      <Pagination
        boundaryCount={1}
        siblingCount={1}
        count={25}
        variant="outlined"
        shape="rounded"
        page={page}
        onChange={handleChange}
      />
    </div>
  );
}

export default PaginationComp;
