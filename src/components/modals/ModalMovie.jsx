import React, { useEffect } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
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
      <div className="darkBG" onClick={() => setIsOpen(false)} />
      <div className="modal-background">
        <section className="modal">
          <div className="modal-body">
            {movieList &&
              movieList
                .filter((movie) => movie.title === title)
                .filter((movie) => movie.id === id)
                .map((movie) => (
                  <div key={movie.id} className="modal-img">
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    />
                    <h3 className="modal-header">{movie.title}</h3>
                    {/* Rating needs to be decied how to look */}
                    <div>{movie.vote_average}/10</div>
                    {/* Sett a string max-length function when render data */}
                    <div className="modal-text">{movie.overview}</div>
                  </div>
                ))}
          </div>
          <button className="close-button" onClick={() => setIsOpen(false)}>
            <AiOutlineCloseCircle />
          </button>
        </section>
      </div>
    </>
  );
};

export default ModalMovie;
