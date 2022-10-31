import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <header>
        <h1>Heading 1</h1>
        <button>
          <AiOutlineSearch />
        </button>
      </header>
      <section>
        {/* grid here! map! */}
      </section>
    </div>
  );
};
export default Home;
