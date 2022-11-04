import React, { useEffect } from "react";
import { AiOutlineCloseCircle, AiOutlineStar } from "react-icons/ai";
import "./modalMovie.scss";
import { useMovies } from "../../context/MovieContext";

const ModalMovie = ({ setIsOpenPop, titlePop, idPop }) => {
	const { popular } = useMovies();

	const moviePop = popular.results;
	return (
		<>
			<div className="movie-modal-darkBG" onClick={() => setIsOpenPop(false)} />
			<div className="movie-modal-background">
				<section className="movie-modal">
					<div className="movie-modal-body">
						{moviePop &&
							moviePop
								.filter((movie) => movie.title === titlePop)
								.filter((movie) => movie.id === idPop)
								.map((movie) => (
									<div key={movie.id} className="movie-modal-img">
										<div className="movie-modal-top-section">
											<img
												src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
											/>
											<button
												className="movie-modal-close-button"
												onClick={() => setIsOpenPop(false)}
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
