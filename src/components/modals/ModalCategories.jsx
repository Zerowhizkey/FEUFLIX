import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "./modalCategories.scss";

const ModalCategories = ({ setIsOpen }) => {
  return (
    <>
      <div className="darkBG" onClick={() => setIsOpen(false)} />
      <div className="modal-background">
        <section className="modal">
          <div className="modal-body">
            <h3>All categories</h3>
            <ul className="modal-list">
              <li>
                <h4>Heading 4</h4>
              </li>
              <li>
                <h4>Heading 4</h4>
              </li>
              <li>
                <h4>Heading 4</h4>
              </li>
              <li>
                <h4>Heading 4</h4>
              </li>
              <li>
                <h4>Heading 4</h4>
              </li>
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
