import React from "react";
import { AiFillLinkedin, AiFillGithub, AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./contact.scss";

const Contact = () => {
  return (
    <>
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
        <h2>About us</h2>
        <section className="card-section">
          <div className="card">
            <div className="card-image">
              <img
                src="https://www.katerina.se/assets/portrait.d3963262.jpg"
                width="100px"
              />
            </div>
            <div className="card-info">
              <h5>Katerina Chrysostomou Nygren</h5>
              <p>Frontend Developer </p>

              <div className="card-contact">
                <a href="https://github.com/ChrysostomouNygren">
                  <button className="icon-button">
                    <AiFillGithub />
                  </button>
                </a>
                <a href="https://www.linkedin.com/in/katerina-chrysostomou-nygren/">
                  <button className="icon-button">
                    <AiFillLinkedin />
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-image">
              <img
                src="https://avatars.githubusercontent.com/u/92317124?v=4"
                width="100px"
              />
            </div>
            <div className="card-info">
              <h5>Marcus Piri</h5>
              <p>Team lead / Frontend Developer</p>

              <div className="card-contact">
                <a href="https://github.com/Zerowhizkey">
                  <button className="icon-button">
                    <AiFillGithub />
                  </button>
                </a>
                <a href="https://www.linkedin.com/in/marcus-piri-968a61221/">
                  <button className="icon-button">
                    <AiFillLinkedin />
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-image">
              <img
                src="https://avatars.githubusercontent.com/u/87518211?v=4"
                width="100px"
              />
            </div>
            <div className="card-info">
              <h5>Linda Andersson</h5>
              <p>Team lead / Frontend Developer </p>

              <div className="card-contact">
                <a href="https://github.com/linda-94-andersson">
                  <button className="icon-button">
                    <AiFillGithub />
                  </button>
                </a>
                <a href="https://www.linkedin.com/in/linda-andersson-stockholm/">
                  <button className="icon-button">
                    <AiFillLinkedin />
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-image">
              <img
                src="https://avatars.githubusercontent.com/u/92568728?v=4"
                width="100px"
              />
            </div>
            <div className="card-info">
              <h5>Sandy Erani Amanda Congreve</h5>
              <p> Frontend Developer </p>

              <div className="card-contact">
                <a className="card-link" href="https://github.com/congreves">
                  <button className="icon-button">
                    <AiFillGithub />
                  </button>
                </a>
                <a
                  className="card-link"
                  href="https://www.linkedin.com/in/sandycongreve/"
                >
                  <button className="icon-button">
                    <AiFillLinkedin />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
