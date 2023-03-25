import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Error from "./pages/Error";
import "./App.css";

function App(): JSX.Element {
	return (
		<Router>
			<Routes>
				<Route path="/*">
					<Route path="" element={<Home language="en" />} />
					<Route path="*" element={<Error />} />
				</Route>
				<Route path="/es/*">
					<Route path="" element={<Home language="es" />} />
					<Route path="*" element={<Error />} />
				</Route>
				<Route path="/en/*">
					<Route path="" element={<Home language="en" />} />
					<Route path="*" element={<Error />} />
				</Route>
				<Route path="*" element={<Error />} />
			</Routes>
		</Router>
	);
}

export default App;
