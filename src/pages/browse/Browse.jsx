import React, { useState } from "react";
import { AiOutlineSearch, AiOutlineDown, AiOutlineStar } from "react-icons/ai";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { useMovies } from "../../context/MovieContext";
import ModalCategories from "../../components/modals/ModalCategories";
import "./browse.scss";
import ModalMovie from "../../components/modals/ModalMovie";

const Browse = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenCat, setIsOpenCat] = useState(false);
  const [title, setTitle] = useState("");
  const [id, setId] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const { foundMovie, searchMovie, allMovie, discoverMovie } = useMovies();

  const movies = allMovie.results;

  const handleplus = () => {
    discoverMovie(allMovie.page + 1);
  };
  const handleminus = () => {
    discoverMovie(allMovie.page - 1);
  };

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
        <button onClick={() => setIsOpenCat(true)}>
          <h5>All Categories</h5>
          <AiOutlineDown />
        </button>
      </section>
      {isOpenCat && <ModalCategories setIsOpenCat={setIsOpenCat} />}

      <h4>Results for : {searchInput}</h4>

      {foundMovie.length !== 0 ? (
        <section>
          {foundMovie.results.map((movie) => (
            <div
              className="movie-card"
              key={movie.id}
              onClick={() => [
                setIsOpen(true),
                setTitle(movie.title),
                setId(movie.id),
              ]}
            >
              <div className="image-box">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                ></img>
              </div>

              <div className="title-card">
                <div className="rating">
                  <AiOutlineStar />
                  <p>{movie.vote_average}/10</p>
                </div>
                <h4>{movie.title}</h4>
              </div>
            </div>
          ))}
          {isOpen && <ModalMovie setIsOpen={setIsOpen} title={title} id={id} />}
        </section>
      ) : (
        <section>
          {movies &&
            movies.map((movie) => (
              <div
                className="movie-card"
                key={movie.id}
                onClick={() => [
                  setIsOpen(true),
                  setTitle(movie.title),
                  setId(movie.id),
                ]}
              >
                <div className="image-box">
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  ></img>
                </div>

                <div className="title-card">
                  <div className="rating">
                    <AiOutlineStar />
                    <p>{movie.vote_average}/10</p>
                  </div>
                  <h4>{movie.title}</h4>
                </div>
              </div>
            ))}
          {isOpen && <ModalMovie setIsOpen={setIsOpen} title={title} id={id} />}
          <button onClick={handleminus}>-</button>
          <button onClick={handleplus}>+</button>
        </section>
      )}
    </div>
  );
};

export default Browse;
