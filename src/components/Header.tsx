import { Container, Typography } from "@mui/material";

import { props } from "../types";
import { header_transcript_object } from "../transcripts_types";
import { getTranscript } from "../transcripts";
import HeaderStyles from "../styles/Header";

const ReactRotatingText = require("react-rotating-text");

function Header({ language, windowSize }: props): JSX.Element {
	const data: header_transcript_object = getTranscript[language].Header;

	return (
		<Container
			id={"header"}
			sx={HeaderStyles.SectionContainer}
			maxWidth={false}
			disableGutters={true}
		>
			<Container style={HeaderStyles.TextContainer} disableGutters={true}>
				<Typography
					variant={windowSize.innerWidth > 450 ? "h1" : "h2"}
					sx={HeaderStyles.Title}
				>
					{data.Title}
				</Typography>
				<Typography
					variant={windowSize.innerWidth > 450 ? "h4" : "h5"}
					sx={HeaderStyles.Subtitle}
				>
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
