import { createContext, useEffect, useState } from "react";
import { getMovies } from "../api/api";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
	const [movies, setMovies] = useState([]);

	const getMovie = async () => {
		const data = await getMovies();
		setMovies(data);
	};

	useEffect(() => {
		getMovie();
	}, []);

	return (
		<MovieContext.Provider value={{ movies }}>{children}</MovieContext.Provider>
	);
};

export const useMovies = () => {
	const context = useMovies(MovieContext);
	if (!context) {
		throw new Error("useMovies is outside MovieProvider");
	}
	return context;
};
