import React, { useState } from "react";
import { AiOutlineSearch, AiOutlineDown } from "react-icons/ai";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { useMovies } from "../../context/MovieContext";
import "./browse.scss";

const Browse = () => {
  const [searchInput, setSearchInput] = useState("");
  const { foundMovie, searchMovie, popular, upcoming } = useMovies();

  const upcomingMovies = upcoming.results;
  const popularMovies = popular.results;

  const handleSearch = () => {
    searchMovie(searchInput);
  };
  console.log(foundMovie);

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
        <button>
          <h5>All Categories</h5>
          <AiOutlineDown />
        </button>
      </section>
      <h4>Results for : {searchInput}</h4>

      {foundMovie.length !== 0 ? (
        <section>
          {foundMovie.results.map((movie) => (
            <div className="movie-card" key={movie.id}>
              <div className="image-box">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                ></img>
              </div>

              <div className="title-card">
                <p>{movie.release_date}</p>
                <h4>{movie.title}</h4>
              </div>
            </div>
          ))}
        </section>
      ) : (
        <section>
          {popularMovies &&
            popularMovies.map((movie) => (
              <div className="movie-card" key={movie.id}>
                <div className="image-box">
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  ></img>
                </div>

                <div className="title-card">
                  <p>{movie.release_date}</p>
                  <h4>{movie.title}</h4>
                </div>
              </div>
            ))}
        </section>
      )}
    </div>
  );
};

export default Browse;
