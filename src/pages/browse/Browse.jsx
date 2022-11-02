import React, { useState } from "react";
import { AiOutlineSearch, AiOutlineDown } from "react-icons/ai";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { useMovies } from "../../context/MovieContext";
import ModalCategories from "../../components/modals/ModalCategories";
import "./browse.scss";

const Browse = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const { foundMovie, searchMovie } = useMovies();

  const handleSearch = () => {
    searchMovie(searchInput);
  };

  return (
    <div>
      <div className="search-bar">
        <AiOutlineSearch />

        <input
          className="search-input"
          type="text"
          placeholder="Search movie.."
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button className="search-button" onClick={handleSearch}>
          <BsFillArrowRightCircleFill />
        </button>
      </div>
      <section className="category-list">
        <h3 onClick={() => setIsOpen(true)}>
          All Categories <AiOutlineDown />
        </h3>
      </section>
      {isOpen && <ModalCategories setIsOpen={setIsOpen} />}
      <h3>Results for : {searchInput}</h3>
      <div>
        {foundMovie.length !== 0 ? (
          <div>
            {foundMovie.results.map((movie) => (
              <div key={movie.id}>{movie.title}</div>
            ))}
          </div>
        ) : (
          <>U suck</>
        )}
      </div>
    </div>
  );
};

export default Browse;
