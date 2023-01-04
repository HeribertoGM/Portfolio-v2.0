import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import "./App.css";

function App(): JSX.Element {
	return (
		<Router>
			<Routes>
				<Route path="/*">
					<Route path="" element={<Home language="en" />} />
					<Route path="*" element={<h1>404</h1>} />
				</Route>
				<Route path="/es/*">
					<Route path="" element={<Home language="es" />} />
					<Route path="*" element={<h1>404</h1>} />
				</Route>
				<Route path="/en/*">
					<Route path="" element={<Home language="en" />} />
					<Route path="*" element={<h1>404</h1>} />
				</Route>
				<Route path="*" element={<h1>404</h1>} />
			</Routes>
		</Router>
	);
}

export default App;
