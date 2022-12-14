import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useMovies } from "../../context/MovieContext";
import "./modalCategories.scss";

const ModalCategories = ({ setIsOpenCat, onChange }) => {
  const { category, genreMovie, setGenreTitle } = useMovies();
  const categories = category.genres;

  const handleInput = async (id, title) => {
    await genreMovie(id, title);
    setIsOpenCat(false);
    setGenreTitle(title);
    onChange();
  };
  
  return (
    <>
      <div className=" categories-darkBG" onClick={() => setIsOpenCat(false)} />
      <div className=" categories-modal-background">
        <section className=" categories-modal">
          <div className=" categories-modal-header">
            <h3>All categories</h3>
            <button
              className="categories-close-button"
              onClick={() => setIsOpenCat(false)}
            >
              <AiOutlineCloseCircle />
            </button>
          </div>
          <div className=" categories-modal-body">
            <ul className=" categories-modal-list">
              {categories &&
                categories.map((category) => (
                  <li className="categories-list-item" key={category.id}>
                    <button
                      className="categories-button"
                      onClick={() => handleInput(category.id, category.name)}
                    >
                      <h4>{category.name}</h4>
                    </button>
                  </li>
                ))}
            </ul>
          </div>
        </section>
      </div>
    </>
  );
};

export default ModalCategories;
