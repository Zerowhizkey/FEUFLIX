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
