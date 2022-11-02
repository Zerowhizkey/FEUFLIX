import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useMovies } from "../../context/MovieContext";
import "./modalCategories.scss";

const ModalCategories = ({ setIsOpen }) => {
  const { category } = useMovies();
  const categories = category.genres; //id och name

  return (
    <>
      <div className="darkBG" onClick={() => setIsOpen(false)} />
      <div className="modal-background">
        <section className="modal">
          <div className="modal-body">
            <h3>All categories</h3>
            <ul className="modal-list">
              {categories &&
                categories.map((category) => (
                    <li key={category.id}>
                      <h4>{category.name}</h4>
                    </li>
                ))}
            </ul>
          </div>
          <button className="close-button" onClick={() => setIsOpen(false)}>
            <AiOutlineCloseCircle />
          </button>
        </section>
      </div>
    </>
  );
};

export default ModalCategories;
