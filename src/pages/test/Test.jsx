import React from "react";
import { useMovies } from "../../context/MovieContext";
const Test = () => {
	const { allMovie, discoverMovie } = useMovies();
	const movies = allMovie.results;

	const handleplus = () => {
		discoverMovie(allMovie.page + 1);
	};
	const handleminus = () => {
		discoverMovie(allMovie.page - 1);
	};

	return (
		<div>
			<p>all</p>
			{movies && movies.map((movie) => <div key={movie.id}>{movie.title}</div>)}
			<button onClick={handleminus}>-</button>
			<button onClick={handleplus}>+</button>
		</div>
	);
};

export default Test;
