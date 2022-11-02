import { createContext, useContext, useEffect, useState } from "react";
import { getMovies, searchMovies } from "../api/api";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
	const [movies, setMovies] = useState([]);

	const getMovie = async () => {
		const data = await getMovies();
		setMovies(data);
	};

	const searchMovie = async (query) => {
		const data = await searchMovies(query);
		setMovies(data);
	};

	useEffect(() => {
		getMovie();
	}, []);

	return (
		<MovieContext.Provider value={{ movies, searchMovie }}>
			{children}
		</MovieContext.Provider>
	);
};

export const useMovies = () => {
	const context = useContext(MovieContext);
	if (!context) {
		throw new Error("useMovies is outside MovieProvider");
	}
	return context;
};
