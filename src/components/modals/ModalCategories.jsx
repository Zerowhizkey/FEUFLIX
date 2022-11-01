import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "./modalCategories.scss";

/* Instruction for setting up a modal

* Import useState from react in the parent component

* In the parent component: 
const [isOpen, setIsOpen] = useState(false);

* In render/button on parent component: 
 <button onClick={() => setIsOpen(true)}>Modal</button>

* Under the button in the parent component add on its own witout wraping in a element:
{isOpen && <ModalCategories setIsOpen={setIsOpen} />}

* Dont forget to import the child component (ModalCategories) in to the parent component 

*/

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
