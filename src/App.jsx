import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Root from "./pages/Root";

import Browse from "./pages/browse/Browse";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
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
      {
        path: "contact",
        element: <Contact />
      }
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
