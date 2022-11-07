import React, { useState } from "react";
import {
  AiOutlineStar,
  AiOutlineCaretLeft,
  AiOutlineCaretRight,
} from "react-icons/ai";
import { useMovies } from "../../context/MovieContext";
import ModalMovie from "../modals/ModalMovie";
import "./../../pages/browse/browse.scss";

const AllMovies = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [movieData, setMovieData] = useState("");
  const { discoverMovie, foundMovie } = useMovies();

  const movies = foundMovie.results;

  const handleIncrement = () => {
    discoverMovie(foundMovie.page + 1);
  };
  const handleDecrement = () => {
    discoverMovie(foundMovie.page - 1);
  };

  return (
    <section className="browse-section">
      {movies &&
        movies.map((movie) => (
          <div
            className="movie-card"
            key={movie.id}
            onClick={() => [setIsOpen(true), setMovieData(movie)]}
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
      {isOpen && <ModalMovie setIsOpen={setIsOpen} movieData={movieData} />}
      <button className="all-movies-button" onClick={handleDecrement}>
        <AiOutlineCaretLeft />
      </button>
      <button className="all-movies-button" onClick={handleIncrement}>
        <AiOutlineCaretRight />
      </button>
    </section>
  );
};

export default AllMovies;
