import React, { useState } from "react";
import { AiOutlineSearch, AiOutlineDown } from "react-icons/ai";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { useMovies } from "../../context/MovieContext";
import ModalCategories from "../../components/modals/ModalCategories";
import Search from "../../components/browseComponents/Search";
import AllMovies from "../../components/browseComponents/AllMovies";
import "./browse.scss";

const Browse = () => {
  const [isOpenCat, setIsOpenCat] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const { foundMovie, searchMovie, genreTitle } = useMovies();

  const handleSearch = () => {
    searchMovie(searchInput);
  };

  return (
    <div className="browse-body">
      <header className="browse-header">
        <div className="search-bar">
          <AiOutlineSearch />
          <input
            className="search-input"
            type="text"
            placeholder="Search movie.."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button className="search-button" onClick={handleSearch}>
            <BsFillArrowRightCircleFill />
          </button>
        </div>
        <section className="category-list">
          <button
            className="category-button"
            onClick={() => setIsOpenCat(true)}
          >
            <h5>{genreTitle}</h5>
            <AiOutlineDown />
          </button>
        </section>
        {isOpenCat && (
          <ModalCategories
            setIsOpenCat={setIsOpenCat}
            onChange={() => setSearchInput("")}
          />
        )}
      </header>
      {foundMovie.length !== 0 ? (
        <div className="browse-body">
          <h4 className="results">Results for: {searchInput}</h4>
          <Search />
        </div>
      ) : (
        <AllMovies />
      )}
    </div>
  );
};

export default Browse;
