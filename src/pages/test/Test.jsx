import React, { useState } from "react";
import { useMovies } from "../../context/MovieContext";
const Test = () => {
	const { allMovie, discoverMovie, genre, genreMovie } = useMovies();
	const movies = allMovie.results;
	const [input, setInput] = useState("");
// console.log(genre.results)
	const handleplus = () => {
		discoverMovie(allMovie.page + 1);
	};
	const handleminus = () => {
		discoverMovie(allMovie.page - 1);
	};

	const handleInput = (e) => {
		setInput(e.target.value);
	};

	const handleSearch = () => {
		genreMovie(input);
	};

	return (
		<div>
			<p>all</p>
			{movies && movies.map((movie) => <div key={movie.id}>{movie.title}</div>)}
			<button onClick={handleminus}>-</button>
			<button onClick={handleplus}>+</button>
			<input type="text" value={input} onChange={handleInput} />
			<button onClick={handleSearch}>search</button>
			{genre !== null &&
				genre.results.map((movie) => <div key={movie.id}>{movie.title}</div>)}
		</div>
	);
};

export default Test;
