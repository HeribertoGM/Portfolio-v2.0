import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/*">
					<Route path="" element={<h1>hola</h1>} />
					<Route path="about" element={<h1>acerca</h1>} />
					<Route path="resume" element={<h1>cv</h1>} />
					<Route path="*" element={<h1>404</h1>} />
				</Route>
				<Route path="/en/*">
					<Route path="" element={<h1>hello</h1>} />
					<Route path="about" element={<h1>about</h1>} />
					<Route path="resume" element={<h1>resume</h1>} />
					<Route path="*" element={<h1>404</h1>} />
				</Route>
				<Route path="*" element={<h1>404</h1>} />
			</Routes>
		</Router>
	);
}

export default App;
