import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Resume from "./pages/Resume";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/*">
					<Route path="" element={<Home language="es" />} />
					<Route path="about" element={<About language="es" />} />
					<Route path="resume" element={<Resume language="es" />} />
					<Route path="*" element={<h1>404</h1>} />
				</Route>
				<Route path="/en/*">
					<Route path="" element={<Home language="en" />} />
					<Route path="about" element={<About language="en" />} />
					<Route path="resume" element={<Resume language="en" />} />
					<Route path="*" element={<h1>404</h1>} />
				</Route>
				<Route path="*" element={<h1>404</h1>} />
			</Routes>
		</Router>
	);
}

export default App;
