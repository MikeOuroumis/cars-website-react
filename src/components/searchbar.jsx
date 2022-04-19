import React, { Component } from "react";

function Searchbar() {
  return (
    <div id="inputWrapper">
      <input
        className="searchbar"
        type="text"
        placeholder="Search by Make, Model, Product or Part Number…"
      />
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="17.974"
          className="navbar-icons"
          viewBox="0 0 18 17.974"
        >
          <path
            id="search"
            d="M18.51,15.514l-3.04-3.04-2.339-.966a6.608,6.608,0,1,0-1.6,1.6l.964,2.332,3.04,3.04a2.1,2.1,0,1,0,2.97-2.97ZM2.325,7.725a5.4,5.4,0,1,1,5.4,5.4A5.406,5.406,0,0,1,2.325,7.725Zm15.336,9.91a.9.9,0,0,1-1.273,0l-2.871-2.871-.9-2.169,2.169.9,2.871,2.871a.9.9,0,0,1,0,1.273Z"
            transform="translate(-1.125 -1.125)"
            fill="#00101a"
          />
        </svg>
      </div>
    </div>
  );
}

export default Searchbar;
