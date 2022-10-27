import { props } from "../types";
import { header_transcript_object } from "../transcripts_types";
import { getTranscript } from "../transcripts";
import { Container, Typography } from "@mui/material";

import HeaderStyles from "../styles/Header";

const ReactRotatingText = require("react-rotating-text");

function Header({ language }: props): JSX.Element {
	const data: header_transcript_object = getTranscript[language].Header;

	return (
		<Container
			sx={HeaderStyles.SectionContainer}
			maxWidth={false}
			disableGutters={true}
		>
			<Container style={HeaderStyles.TextContainer} disableGutters={true}>
				<Typography variant="h1" sx={HeaderStyles.Title}>
					{data.Title}
				</Typography>
				<Typography variant="h4" sx={HeaderStyles.Subtitle}>
					{data.Subtitle}
					<ReactRotatingText
						items={data.Carousel}
						typingInterval={500}
						deletingInterval={250}
						cursor={false}
					/>
				</Typography>
			</Container>
		</Container>
	);
}

export default Header;
