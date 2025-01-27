import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Error from "./pages/Error";
import "./App.css";

function App(): JSX.Element {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home language="en" />} />
				<Route path="*" element={<Error />} />
			</Routes>
		</Router>
	);
}

export default App;
