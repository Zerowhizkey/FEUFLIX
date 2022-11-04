import React from "react";
import { AiOutlineCloseCircle, AiOutlineStar } from "react-icons/ai";
import "./modalMovie.scss";
import { useMovies } from "../../context/MovieContext";

const ModalMovie = ({ setIsOpenUp, titleUp, idUp }) => {
	const { upcoming } = useMovies();
	const movieList = upcoming.results;

	return (
		<>
			<div className="movie-modal-darkBG" onClick={() => setIsOpenUp(false)} />
			<div className="movie-modal-background">
				<section className="movie-modal">
					<div className="movie-modal-body">
						{movieList &&
							movieList
								.filter((movie) => movie.title === titleUp)
								.filter((movie) => movie.id === idUp)
								.map((movie) => (
									<div key={movie.id} className="movie-modal-img">
										<div className="movie-modal-top-section">
											<img
												src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
											/>
											<button
												className="movie-modal-close-button"
												onClick={() => setIsOpenUp(false)}
											>
												<AiOutlineCloseCircle />
											</button>
										</div>
										<h3 className="movie-modal-header">{movie.title}</h3>
										<div className="rating">
											<AiOutlineStar />
											<p>{movie.vote_average}/10</p>
										</div>
										<div className="movie-modal-text">{movie.overview}</div>
									</div>
								))}
					</div>
				</section>
			</div>
		</>
	);
};

export default ModalMovie;
