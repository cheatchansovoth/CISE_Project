import React from "react";

const SearchBar = ({setquery}) => {
    return(
        <>
        <input type="text"
         placeholder="Search..." 
        className="Search" 
        onChange={(e)=> setquery(e.target.value)}
        />
        </>
    )
}
export default SearchBar;