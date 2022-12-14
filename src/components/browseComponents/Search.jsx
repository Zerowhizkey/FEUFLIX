import React, { useState } from "react";
import { AiOutlineStar } from "react-icons/ai";
import { useMovies } from "../../context/MovieContext";
import ModalMovie from "../modals/ModalMovie";
import "./../../pages/browse/browse.scss";

const Search = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [movieData, setMovieData] = useState("");
  const { foundMovie } = useMovies();

  return (
    <div className="browse-body">
      <section className="browse-section">
        {foundMovie.results.map((movie) => (
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
      </section>
    </div>
  );
};

export default Search;
