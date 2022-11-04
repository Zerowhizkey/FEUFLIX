import React, { useState } from "react";
import { AiOutlineStar, AiOutlineCaretLeft, AiOutlineCaretRight } from "react-icons/ai";
import { useMovies } from "../../context/MovieContext";
import ModalMovie from "../modals/ModalMovie";
import "./../../pages/browse/browse.scss";

const AllMovies = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [id, setId] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const { searchMovie, allMovie, discoverMovie } = useMovies();

  const movies = allMovie.results;

  const handleIncrement = () => {
    discoverMovie(allMovie.page + 1);
  };
  const handleDecrement = () => {
    discoverMovie(allMovie.page - 1);
  };

  return (
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
      <button className="all-movies-button" onClick={handleDecrement}>
        <AiOutlineCaretLeft/>
      </button>
      <button className="all-movies-button" onClick={handleIncrement}>
        <AiOutlineCaretRight/>
      </button>
    </section>
  );
};

export default AllMovies;
