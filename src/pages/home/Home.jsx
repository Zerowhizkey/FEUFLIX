import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useMovies } from "../../context/MovieContext";
import "./home.scss";
import ModalMovie from "../../components/modals/ModalMovie";

const Home = () => {
  const [show, setShow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState("");

  const { movies } = useMovies();

  const movieList = movies.results;
  const url =
    "https://m.media-amazon.com/images/M/MV5BNDIzNDU0YzEtYzE5Ni00ZjlkLTk5ZjgtNjM3NWE4YzA3Nzk3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg";

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
          {movieList &&
            movieList.map((movie) => (
              <div key={movie.id} onClick={() => [setIsOpen(true), setId(movie.id)]}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                ></img>
                <h1>{movie.original_title}</h1>
              </div>
            ))}
          {isOpen && <ModalMovie setIsOpen={setIsOpen} id={id} />}
        </section>
        {/* Top rated: */}
      </main>
    </div>
  );
};
export default Home;
