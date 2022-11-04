import React, { useState } from "react";
import { AiOutlineSearch, AiOutlineStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useMovies } from "../../context/MovieContext";
import "./home.scss";
import ModalMovie from "../../components/modals/ModalMovie";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [id, setId] = useState("");
  const { upcoming, popular } = useMovies();
  const upcomingMovies = upcoming.results;
  const popularMovies = popular.results;

  return (
    <div className="home-body">
      <header className="home-header">
          <img
            src="https://i.ibb.co/Nj4qRPD/feuflix-2.png"
            alt="feuflix-1"
            border="0"
            className="logo"
          />
        <button className="home-button">
          <Link to="/browse">
            <AiOutlineSearch />
          </Link>
        </button>
      </header>
      <main className="home-main">
        <h1 className="home-h1">
          Welcome to <span className="home-span">FeaFlix</span>
          {/* <br></br>streaming for action! */}
        </h1>
        {/* //////////////////Upcoming////////////////// */}
        <h3 className="home-h3">Upcoming:</h3>
        <section className="home-section">
          {upcomingMovies &&
            upcomingMovies.map((movie) => (
              <div
                key={movie.id}
                onClick={() => [
                  setIsOpen(true),
                  setTitle(movie.title),
                  setId(movie.id),
                ]}
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
          {isOpen && <ModalMovie setIsOpen={setIsOpen} title={title} id={id} />}
        </section>

        {/* //////////////////Popular////////////////// */}
        <h3 className="home-h3">Popular:</h3>
        <section className="home-section">
          {popularMovies &&
            popularMovies.map((movie) => (
              <div
                key={movie.id}
                onClick={() => [
                  setIsOpen(true),
                  setTitle(movie.title),
                  setId(movie.id),
                ]}
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
          {isOpen && <ModalMovie setIsOpen={setIsOpen} title={title} id={id} />}
        </section>
      </main>
    </div>
  );
};
export default Home;
