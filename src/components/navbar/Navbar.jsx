import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.scss";
import { AiOutlineHome, AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import { useMovies } from "../../context/MovieContext";

const Navbar = () => {
	const { genreMovie, discoverMovie, setFoundMovie } = useMovies();
	const handleInput = async (id, title) => {
		await genreMovie(id, title), discoverMovie(1), setFoundMovie([]);

	};
	let activeStyle = {
		color: "#2BB876",
		fontSize: "x-large",
		padding: "0.5em",
	};
	let inActiveStyle = {
		color: "white",
		fontSize: "x-large",
		padding: "0.5em",
	};
	return (
		<div className="nav-container">
			<ul className="nav-items">
				<li className="NavItem">
					<NavLink
						to="home"
						style={({ isActive }) => (isActive ? activeStyle : inActiveStyle)}
					>
						<AiOutlineHome size={35}/>
					</NavLink>
				</li>
				<li>
					<NavLink
						to="browse"
						style={({ isActive }) => (isActive ? activeStyle : inActiveStyle)}
						onClick={() => handleInput(null, 'All Categories')}
					>
						<AiOutlineSearch size={35}/>
					</NavLink>
				</li>
				<li>
					<NavLink
						to="contact"
						style={({ isActive }) => (isActive ? activeStyle : inActiveStyle)}
					>
						<AiOutlineUser size={35}/>
					</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
