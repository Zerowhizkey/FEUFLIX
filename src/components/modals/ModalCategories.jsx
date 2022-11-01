import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

const ModalCategories = () => {
  return (
    <div className="background">
      <section className="modal">
        <button className="close-button">
          <AiOutlineCloseCircle />
        </button>
        <div>
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
      </section>
    </div>
  );
};

export default ModalCategories;
