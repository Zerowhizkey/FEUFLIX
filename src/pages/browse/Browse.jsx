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
  const {
    foundMovie,
    searchMovie,
    allMovie,
    discoverMovie,
    genre,
    genreTitle,
    setGenreTitle,
  } = useMovies();

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

  return !genre ? (
    // no genre search:
    <div className="browse-body">
      <header className="browse-header">
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
          <button className="category-button" onClick={() => setIsOpenCat(true)}>
            <h5>All Categories</h5>
            <AiOutlineDown />
          </button>
        </section>
        {isOpenCat && <ModalCategories setIsOpenCat={setIsOpenCat} />}
      </header>

      {foundMovie.length !== 0 ? (
        <div className="browse-body">
          <h4 className="results">Results for: {searchInput}</h4>
          <section className="browse-section">
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
            {isOpen && (
              <ModalMovie setIsOpen={setIsOpen} title={title} id={id} />
            )}
          </section>
        </div>
      ) : (
        // all movies
        <section className="browse-section">
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
  ) : (
    // genred searched
    <div className="browse-body">
      <header className="browse-header">
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
          <button className="category-button" onClick={() => setIsOpenCat(true)}>
            <h5>{genreTitle}</h5>
            <AiOutlineDown />
          </button>
        </section>
        {isOpenCat && <ModalCategories setIsOpenCat={setIsOpenCat} />}
      </header>

      {foundMovie.length !== 0 ? (
        <div className="browse-body">
          {setGenreTitle("All Categories")}
          <h4 className="results">Results for: {searchInput}</h4>
          <section className="browse-section">
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
            {isOpen && (
              <ModalMovie setIsOpen={setIsOpen} title={title} id={id} />
            )}
          </section>
        </div>
      ) : (
        // genred movies
        <section className="browse-section">
          {genre !== null &&
            genre.results.map((movie) => (
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
        </section>
      )}
      {isOpen && <ModalMovie setIsOpen={setIsOpen} title={title} id={id} />}
    </div>
  );
};

export default Browse;
