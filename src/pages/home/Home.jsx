import React, { useState } from "react";
import { AiOutlineSearch, AiOutlineStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useMovies } from "../../context/MovieContext";
import ModalUp from "../../components/modals/ModalUp";
import ModalPop from "../../components/modals/ModalPop";
import "./home.scss";

const Home = () => {
  const [isOpenUp, setIsOpenUp] = useState(false);
  const [isOpenPop, setIsOpenPop] = useState(false);
  const [titleUp, setTitleUp] = useState("");
  const [titlePop, setTitlePop] = useState("");
  const [idUp, setIdUp] = useState("");
  const [idPop, setIdPop] = useState("");
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
            <AiOutlineSearch className="search-icon" />
          </Link>
        </button>
      </header>
      <main>
        <h1 className="home-h1">
          Welcome to <span className="home-span">FeaFlix</span>
        </h1>
        {/* //////////////////Upcoming////////////////// */}
        <h3 className="home-h3">Upcoming:</h3>
        <section className="home-section">
          {upcomingMovies &&
            upcomingMovies.map((movie) => (
              <div
                key={movie.id}
                onClick={() => [
                  setIsOpenUp(true),
                  setTitleUp(movie.title),
                  setIdUp(movie.id),
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
          {isOpenUp && (
            <ModalUp setIsOpenUp={setIsOpenUp} titleUp={titleUp} idUp={idUp} />
          )}
        </section>

        {/* //////////////////Popular////////////////// */}
        <h3 className="home-h3">Popular:</h3>
        <section className="home-section">
          {popularMovies &&
            popularMovies.map((movie) => (
              <div
                key={movie.id}
                onClick={() => [
                  setIsOpenPop(true),
                  setTitlePop(movie.title),
                  setIdPop(movie.id),
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
          {isOpenPop && (
            <ModalPop
              setIsOpenPop={setIsOpenPop}
              titlePop={titlePop}
              idPop={idPop}
            />
          )}
        </section>
      </main>
    </div>
  );
};
export default Home;
