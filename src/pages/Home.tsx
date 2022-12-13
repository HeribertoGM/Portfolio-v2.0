import Container from "@mui/material/Container";

import { props } from "../types";
import Header from "../components/Header";
import Education from "../components/Education";
import Experience from "../components/Experience";

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
		</Container>
	);
}

export default Home;
