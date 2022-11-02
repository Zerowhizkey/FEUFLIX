import React, { useState } from "react";
import { AiOutlineSearch, AiOutlineDown } from "react-icons/ai";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { useMovies } from "../../context/MovieContext";
import "./browse.scss";


const Browse = () => {
  const [searchInput, setSearchInput] = useState(""); // use state för input
  const [filteredResults, setFilteredResults] = useState([]); // Filter input
  const { movies } = useMovies(); // Importera custom hook
  const movieList = movies.results;


  const searchItems = (searchValue) => {
    setSearchInput(searchValue);

    if (searchInput !== "") {
      const filteredData = movieList.filter((item) => {
        searchInput.includes() === item.original_title;
        console.log(item.original_title);
        return Object.values(item.original_title)
          .join(" ")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(movieList);
    }
  };

  return (
    <div>
      <div className="search-bar">
        <AiOutlineSearch />

        <input
          className="search-input"
          type="text"
          placeholder="Search movie.."
          onChange={(e) => searchItems(e.target.value)}
        />
        <button className="search-button">
          <BsFillArrowRightCircleFill />
        </button>
      </div>
      <section className="category-list">
        <h3>
          All Categories <AiOutlineDown />
        </h3>
      </section>
      <h3>Results for : {searchInput}</h3>
      {searchInput
        ? filteredResults.map((item) => {
            return (
              <section key={item.id}>
                <h3>{item.original_title}</h3>
              </section>
            );
          })
        : movieList &&
          movieList.map((movie) => {
            return (
              <section key={movie.id}>
                <h3>{movie.original_title}</h3>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                />
              </section>
            );
          })}
    </div>
  );
};

export default Browse;
