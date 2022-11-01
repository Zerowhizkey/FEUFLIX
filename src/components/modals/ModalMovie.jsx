import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "./modalMovie.scss";

const ModalMovie = ({ setIsOpen }) => {
  return (
    <>
      <div className="darkBG" onClick={() => setIsOpen(false)} />
      <div className="modal-background">
        <section className="modal">
          <div className="modal-body">
           <img className="modal-img" src="src goes here" alt="movie poster" />
          </div>
          <button className="close-button" onClick={() => setIsOpen(false)}>
            <AiOutlineCloseCircle />
          </button>
        </section>
      </div>
    </>
  );
};

export default ModalMovie;
