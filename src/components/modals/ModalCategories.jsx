import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "./modalCategories.scss";

const ModalCategories = () => {
  return (
    <div className="background">
      <section className="modal">
        <div className="modal-body">
          <h3>All categories</h3>
          <ul>
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
        <button className="close-button">
          <AiOutlineCloseCircle />
        </button>
      </section>
    </div>
  );
};

export default ModalCategories;
