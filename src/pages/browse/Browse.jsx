import React, { useState } from "react";
import { AiOutlineSearch, AiOutlineDown } from "react-icons/ai";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { useMovies } from "../../context/MovieContext";
import ModalCategories from "../../components/modals/ModalCategories";
import Categories from "../../components/browseComponents/Categories";
import Search from "../../components/browseComponents/Search";
import AllMovies from "../../components/browseComponents/AllMovies";
import "./browse.scss";

const Browse = () => {
	const [isOpenCat, setIsOpenCat] = useState(false);
	const [searchInput, setSearchInput] = useState("");
	const { foundMovie, searchMovie, genreTitle } = useMovies();

	const handleSearch = () => {
		searchMovie(searchInput);
	};
	console.log(foundMovie);
	return (
		<div className="browse-body">
			<header className="browse-header">
				<div className="search-bar">
					<AiOutlineSearch />
					<input
						className="search-input"
						type="text"
						placeholder="Search movie.."
						value={searchInput}
						onChange={(e) => setSearchInput(e.target.value)}
					/>
					<button className="search-button" onClick={handleSearch}>
						<BsFillArrowRightCircleFill />
					</button>
				</div>
				<section className="category-list">
					<button
						className="category-button"
						onClick={() => setIsOpenCat(true)}
					>
						<h5>{genreTitle}</h5>
						<AiOutlineDown />
					</button>
				</section>
				{isOpenCat && (
					<ModalCategories
						setIsOpenCat={setIsOpenCat}
						onChange={() => setSearchInput("")}
					/>
				)}
			</header>
			{foundMovie.length !== 0 ? (
				<div className="browse-body">
					<h4 className="results">Results for: {searchInput}</h4>
					<Search />
				</div>
			) : (
				<AllMovies />
			)}
		</div>
	);
};

// {genre.length !== 0 ? (
//   <div className="browse-body">
//     <h4 className="results">Results for: {searchInput}</h4>
//     <Search />
//   </div>
// ) : (
//   <Categories />
// )}

export default Browse;
// : (
// genred searched
//   <div className="browse-body">
//     <header className="browse-header">
//       <div className="search-bar">
//         <AiOutlineSearch />
//         <input
//           className="search-input"
//           type="text"
//           placeholder="Search movie.."
//           value={searchInput}
//           onChange={(e) => setSearchInput(e.target.value)}
//         />
//         <button className="search-button" onClick={handleSearch}>
//           <BsFillArrowRightCircleFill />
//         </button>
//       </div>
//       <section className="category-list">
//         <button
//           className="category-button"
//           onClick={() => setIsOpenCat(true)}
//         >
//           {/* <h5>{genreTitle}</h5> */}
//           <AiOutlineDown />
//         </button>
//       </section>
//       {isOpenCat && <ModalCategories setIsOpenCat={setIsOpenCat} />}
//     </header>

//     {foundMovie.length !== 0 ? (
//       <div className="browse-body">
//         {/* {setGenreTitle("All Categories")} */}
//         <h4 className="results">Results for: {searchInput}</h4>
//         <Search />
//       </div>
//     ) : (
//       // genred movies
//       <div>
//         <Categories/>
//       </div>
//     )}
//   </div>
// );
// {genre.length !== 0 ? (
//   <div className="browse-body">
//     <h4 className="results">Results for: {searchInput}</h4>
//     <Search />
//   </div>
// ) : (
//   <Categories />
// )}
