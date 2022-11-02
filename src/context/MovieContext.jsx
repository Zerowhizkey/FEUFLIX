import { createContext, useContext, useEffect, useState } from "react";
import {
	getUpcomings,
	getPopulars,
	searchMovies,
	discoverMovies,
} from "../api/api";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
	const [upcoming, setUpcoming] = useState([]);
	const [popular, setPopular] = useState([]);
	const [foundMovie, setFoundMovie] = useState([]);
	const [allMovie, setAllMovie] = useState([]);

	const getUpcoming = async () => {
		const data = await getUpcomings();
		setUpcoming(data);
	};

	const getPopular = async () => {
		const data = await getPopulars();
		setPopular(data);
	};

	const searchMovie = async (query) => {
		const data = await searchMovies(query);
		setFoundMovie(data);
	};

	const discoverMovie = async (page) => {
		const data = await discoverMovies(page);
		setAllMovie(data);
	};

	useEffect(() => {
		getUpcoming();
		getPopular();
		discoverMovie(1);
	}, []);

	return (
		<MovieContext.Provider
			value={{
				upcoming,
				popular,
				searchMovie,
				foundMovie,
				allMovie,
				discoverMovie,
			}}
		>
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
