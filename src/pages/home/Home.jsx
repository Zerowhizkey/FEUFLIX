import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useMovies } from "../../context/MovieContext";
import "./home.scss";

const Home = () => {
  const [show, setShow] = useState(false);
  const { movies } = useMovies();

  const movieList = movies.results;
  const url =
    "https://m.media-amazon.com/images/M/MV5BNDIzNDU0YzEtYzE5Ni00ZjlkLTk5ZjgtNjM3NWE4YzA3Nzk3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg";

  console.log(movieList);
  return (
    <div className="home">
      <header>
        <h1>Heading 1</h1>
        <button>
          <Link to="/browse">
            <AiOutlineSearch />
          </Link>
        </button>
      </header>
      {/* Popular:? */}
      {/* Latest:? */}
      <main>
        {/* Upcoming: */}
        <h3>Upcoming:</h3>
        <section>
          {/* map out posters onClick=modal*/}
          {movieList &&
            movieList.map((movie) => (
              <div key={movie.id}>
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}></img>
                <h1>{movie.original_title}</h1>
              </div>
            ))}
          <img
            src={url}
            alt="figth club"
            onClick={() => [setShow(true), console.log(show)]}
          />
          <img src={url} alt="figth club" />
          <img src={url} alt="figth club" />
          <img src={url} alt="figth club" />
          <img src={url} alt="figth club" />
          <img src={url} alt="figth club" />
          <img src={url} alt="figth club" />
          <img src={url} alt="figth club" />
          <img src={url} alt="figth club" />
          <img src={url} alt="figth club" />
        </section>
        {/* Top rated: */}
        <h3>Top rated:</h3>
        <section>
          {/* map out posters onClick=modal*/}
          <img
            src={url}
            alt="figth club"
            onClick={() => [setShow(true), console.log(show)]}
          />
          <img src={url} alt="figth club" />
          <img src={url} alt="figth club" />
          <img src={url} alt="figth club" />
          <img src={url} alt="figth club" />
          <img src={url} alt="figth club" />
          <img src={url} alt="figth club" />
          <img src={url} alt="figth club" />
          <img src={url} alt="figth club" />
          <img src={url} alt="figth club" />
        </section>
      </main>
    </div>
  );
};
export default Home;
