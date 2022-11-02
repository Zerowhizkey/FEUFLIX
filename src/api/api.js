import axios from "axios";

export const getPopulars = async () => {
	const { data } = await axios.get(
		`${import.meta.env.VITE_URL_KEY}movie/popular?api_key=${import.meta.env.VITE_API_KEY
		}`
	);
	return data;
};

export const getUpcomings = async () => {
	const { data } = await axios.get(
		`${import.meta.env.VITE_URL_KEY}movie/upcoming?api_key=${import.meta.env.VITE_API_KEY
		}`
	);
	return data;
};

export const searchMovies = async (query) => {
	const { data } = await axios.get(
		`${import.meta.env.VITE_URL_KEY}search/movie?api_key=${import.meta.env.VITE_API_KEY
		}&query=${query}`
	);
	return data;
};

export const discoverMovies = async (page) => {
	const { data } = await axios.get(
		`${import.meta.env.VITE_URL_KEY}discover/movie?api_key=${import.meta.env.VITE_API_KEY
		}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate`
	);
	return data;
};

export const getCategories = async () => {
	const { data } = await axios.get(`${import.meta.env.VITE_URL_KEY}genre/movie/list?api_key=${import.meta.env.VITE_API_KEY}&language=en-US`);
	return data;
}
