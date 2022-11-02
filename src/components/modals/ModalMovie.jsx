import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "./modalMovie.scss";
import { useMovies } from "../../context/MovieContext";

const ModalMovie = ({ setIsOpen, title }) => {
  const { foundMovie } = useMovies();
  const movieList = foundMovie.results;
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
            {movieList &&
              movieList
                .filter((movie) => movie.title === title)
                .map((movie) => (
                  <div key={movie.id} className="modal-img">
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    />
                    <h3 className="modal-header">{movie.original_title}</h3>
                    {/* Rating needs to be decied how to look */}
                    <div>{movie.vote_average}/10</div>
                    {/* Sett a string max-length function when render data */}
                    <div className="modal-text">{movie.overview}</div>
                  </div>
                ))}
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
