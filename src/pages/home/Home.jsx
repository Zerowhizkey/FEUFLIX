import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useMovies } from "../../context/MovieContext";
import "./home.scss";
import ModalMovie from "../../components/modals/ModalMovie";

const Home = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState("");
  const { upcoming, popular } = useMovies();
  const upcomingMovies = upcoming.results;
  const popularMovies = popular.results;


  return (
    <div className="home">
      <header>
        <h1>FEUFLIX</h1>
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
          {upcomingMovies &&
            upcomingMovies.map((movie) => (
              <div
                key={movie.id}
                onClick={() => [setIsOpen(true), setId(movie.id)]}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                ></img>
                <h1>{movie.original_title}</h1>
              </div>
            ))}
          {isOpen && <ModalMovie setIsOpen={setIsOpen} id={id} />}
        </section>
        {/* Top rated: */}

        <h3>Popular:</h3>
        <section>
          {popularMovies &&
            popularMovies.map((movie) => (
              <div
                key={movie.id}
                onClick={() => [setIsOpen(true), setId(movie.id)]}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                ></img>
                <h1>{movie.original_title}</h1>
              </div>
            ))}
          {isOpen && <ModalMovie setIsOpen={setIsOpen} id={id} />}
        </section>
      </main>
    </div>
  );
};
export default Home;
