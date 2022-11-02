import React, { useState } from "react";
import { AiOutlineSearch, AiOutlineStar } from "react-icons/ai";
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

  console.log(upcomingMovies);

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
      <main>
        {/* //////////////////Upcoming////////////////// */}
        <h3>Upcoming:</h3>
        <section>
          {upcomingMovies &&
            upcomingMovies.map((movie) => (
              <div
                key={movie.id}
                onClick={() => [setIsOpen(true), setId(movie.title)]}
                className="movie-card"
              >
                <div className="img-box">
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
          {isOpen && <ModalMovie setIsOpen={setIsOpen} id={id} />}
        </section>

        {/* //////////////////Popular////////////////// */}
        <h3>Popular:</h3>
        <section>
          {popularMovies &&
            popularMovies.map((movie) => (
              <div
                key={movie.id}
                onClick={() => [setIsOpen(true), setId(movie.title)]}
                className="movie-card"
              >
                <div className="img-box">
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
          {isOpen && <ModalMovie setIsOpen={setIsOpen} id={id} />}
        </section>
      </main>
    </div>
  );
};
export default Home;
