import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
const Root = () => {
	return (
		<div>
			<Outlet />
			<Navbar />
		</div>
	);
};

export default Root;
