import React, { useState, useEffect } from "react";
import { AiOutlineSearch, AiOutlineDown } from "react-icons/ai";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import "./browse.scss";
//import axios from "axios";

const Browse = () => {
  const [searchInput, setSearchInput] = useState(""); // use state för input
  const [filteredResults, setFilteredResults] = useState([]); // Filter input
  const [APIData, setAPIData] = useState([]); // Byt ut till context hook

  // Matcha input med filter funktion
  //Handle Change

  // useEffect(() => {
  //   axios
  //     .get(
  //       `https://api.themoviedb.org/3/search/multi?api_key=<<api_key>>&language=en-US&page=1&include_adult=false
  //   `
  //     )
  //     .then((response) => {
  //       setAPIData(response.data);
  //     });
  // }, []);

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);

    if (searchInput !== "") {
      const filteredData = APIData.filter((item) => {
        return Object.values(item)
          .join(" ")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(APIData);
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
      {searchInput.length < 1
        ? filteredResults.map((item) => {
            return (
              <section key={item.id}>
                <img src={item.movie_id} />
              </section>
            );
          })
        : APIData.map((item) => {
            return (
              <section key={item.id}>
                <h3>New movies</h3>
                <img src={item.movie} />
              </section>
            );
          })}
    </div>
  );
};

export default Browse;
