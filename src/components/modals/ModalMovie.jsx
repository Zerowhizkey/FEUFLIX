import React, { useEffect } from "react";
import { AiOutlineCloseCircle, AiOutlineStar  } from "react-icons/ai";
import "./modalMovie.scss";
import { useMovies } from "../../context/MovieContext";

const ModalMovie = ({ setIsOpen, title, id }) => {
  const { foundMovie, searchMovie } = useMovies();
  const movieList = foundMovie.results;

  const handleSearch = () => {
    searchMovie(title);
  };

  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <>
      <div className="movie-modal-darkBG" onClick={() => setIsOpen(false)} />
      <div className="movie-modal-background">
        <section className="movie-modal">
          <div className="movie-modal-body">
            {movieList &&
              movieList
                .filter((movie) => movie.title === title)
                .filter((movie) => movie.id === id)
                .map((movie) => (
                  <div key={movie.id} className="movie-modal-img">
                    <div className="movie-modal-top-section">
                      <img
                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                      />
                      <button
                        className="movie-modal-close-button"
                        onClick={() => setIsOpen(false)}
                      >
                        <AiOutlineCloseCircle />
                      </button>
                    </div>
                    <h3 className="movie-modal-header">{movie.title}</h3>
                    <div className="rating">
                      <AiOutlineStar />
                      <p>{movie.vote_average}/10</p>
                    </div>
                    <div className="movie-modal-text">{movie.overview}</div>
                  </div>
                ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default ModalMovie;
