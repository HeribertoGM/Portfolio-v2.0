import { Container } from "@mui/material";

import { props } from "../types";
import Header from "../components/Header";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Footer from "../components/Footer";
import ScrollUp from "../components/ScrollUp";

function Home({ language }: props): JSX.Element {
	return (
		<Container
			sx={{ border: "solid 5px red" }}
			maxWidth={false}
			disableGutters={true}
		>
			<Header language={language} />
			<Education language={language} />
			<Experience language={language} />
			<Projects language={language} />
			<Skills language={language} />
			<Footer language={language} />
			<ScrollUp />
		</Container>
	);
}

export default Home;
