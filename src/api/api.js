import axios from "axios";

export const getMovies = async () => {
	const { data } = await axios.get(
		`${import.meta.env.VITE_URL_KEY}list/1?api_key=${
			import.meta.env.VITE_API_KEY
		}`
	);
	console.log(data);
	return data;
};

export const searchMovies = async (query) => {
	const { data } = await axios.get(
		`${import.meta.env.VITE_URL_KEY}search/movie?api_key=${
			import.meta.env.VITE_API_KEY
		}&query=${query}`
	);
	console.log(data);
	return data;
};

// const API_SEARCH="https://api.themoviedb.org/3/search/movie?api_key=<<api_key_here>>&query";
