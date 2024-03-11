import { useState, useEffect } from "react";
import { Container } from "@mui/material";

import { props } from "../types";
import Header from "../components/Header";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Footer from "../components/Footer";
import ScrollUp from "../components/ScrollUp";

let getWindowSize = () => {
	const { innerWidth, innerHeight } = window;
	return { innerWidth, innerHeight };
};

function Home({ language }: props): JSX.Element {
	const [windowSize, setWindowSize] = useState(getWindowSize());

	useEffect(() => {
		let handleWindowResize = () => {
			setWindowSize(getWindowSize());
		};

		window.addEventListener("resize", handleWindowResize);

		return () => {
			window.removeEventListener("resize", handleWindowResize);
		};
	}, []);

	return (
		<Container maxWidth={false} disableGutters={true}>
			<Header language={language} windowSize={windowSize} />
			<Education language={language} windowSize={windowSize} />
			<Experience language={language} />
			<Projects language={language} />
			<Skills language={language} />
			<Footer language={language} />
			<ScrollUp />
		</Container>
	);
}

export default Home;
