import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./home.scss";

const Home = () => {
  const url =
    "https://m.media-amazon.com/images/M/MV5BNDIzNDU0YzEtYzE5Ni00ZjlkLTk5ZjgtNjM3NWE4YzA3Nzk3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg";
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
      <section>
        {/* map! */}
        <img src={url} alt="figth club" />
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
    </div>
  );
};
export default Home;
