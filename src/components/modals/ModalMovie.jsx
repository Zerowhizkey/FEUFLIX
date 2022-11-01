import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "./modalMovie.scss";

const ModalMovie = ({ setIsOpen }) => {
  /* Instruction for setting up a modal

* Import useState from react in the parent component

* In the parent component: 
const [isOpen, setIsOpen] = useState(false);

* In render/button on parent component: 
 <button onClick={() => setIsOpen(true)}>Modal</button>

* Under the button in the parent component add on its own witout wraping in a element:
{isOpen && <ModalMovie setIsOpen={setIsOpen} />}

* Dont forget to import the child component (ModalMovie) in to the parent component 

*/
  return (
    <>
      <div className="darkBG" onClick={() => setIsOpen(false)} />
      <div className="modal-background">
        <section className="modal">
          <div className="modal-body">
            <div className="modal-img">
              <img src="" />
              <h3 className="modal-header">Title</h3>
              {/* Rating needs to be decied how to look */}
              <div>Rating</div>
              {/* Sett a string max-length function when render data */}
              <div className="modal-text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Molestias rerum provident, in quibusdam distinctio eum nulla
                dolorum totam doloremque nam facilis dolore ad fugiat nesciunt
                reprehenderit quae odio velit eos! In quibusdam distinctio eum
                nulla dolorum totam doloremque nam facilis dolore ad fugiat
                nesciunt reprehenderit quae odio velit eos!
              </div>
            </div>
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
