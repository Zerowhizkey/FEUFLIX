import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Root from "./pages/Root";

import Browse from "./pages/browse/Browse";
import Home from "./pages/home/Home";

import { MovieProvider } from "./context/MovieContext";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "browse",
        element: <Browse />,
      },
    ],
  },
]);
function App() {

	return (
		<div className="App">
			<MovieProvider>
				<RouterProvider router={router} />
			</MovieProvider>
		</div>
	);
}

export default App;
