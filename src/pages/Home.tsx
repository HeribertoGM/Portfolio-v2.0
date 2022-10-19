import { props } from "../types";
import Container from "@mui/material/Container";

import Header from "../components/Header";

function Home({ language }: props): JSX.Element {
	return (
		<Container
			sx={{ border: "solid 5px red" }}
			maxWidth={false}
			disableGutters={true}
		>
			<Header language={language} />
		</Container>
	);
}

export default Home;
