import React from "react";

const ResSearch = () => {
  return (
    <div className="search-bars m-5  lg:hidden">
      <i className="fa-solid fa-magnifying-glass search-icon"></i>
      <input type="text" className="search" placeholder="Search Coin" />
    </div>
  );
};

export default ResSearch;
