import React from "react";
import { Link } from "react-router-dom";
import "../navbar/Navbar";
const Navbar = () => {
	return (
		<div>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="browse">Browse</Link>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;