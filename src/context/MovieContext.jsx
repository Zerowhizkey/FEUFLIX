import { createContext, useContext, useEffect, useState } from "react";
import {
	getUpcomings,
	getPopulars,
	searchMovies,
	discoverMovies,
	getCategories,
	genreMovies,
} from "../api/api";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
	const [upcoming, setUpcoming] = useState([]);
	const [popular, setPopular] = useState([]);
	const [foundMovie, setFoundMovie] = useState([]);
	const [allMovie, setAllMovie] = useState([]);
	const [category, setCategorie] = useState([]);
	const [genre, setGenre] = useState(null);
	const [genreTitle, setGenreTitle] = useState('')

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

	const genreMovie = async (genre, title) => {
		const data = await genreMovies(genre);
		setGenre(data)
		setGenreTitle(title)
	};

	const getcategory = async () => {
		const data = await getCategories();
		setCategorie(data);
	};

	useEffect(() => {
		getUpcoming();
		getPopular();
		discoverMovie(1);
		getcategory();
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
				category,
				genreMovie,
				genre,
				genreTitle
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
