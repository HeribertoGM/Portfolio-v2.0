import { Container, Typography } from "@mui/material";

import { props } from "../types";
import { footer_transcript_object } from "../transcripts_types";
import { getTranscript } from "../transcripts";
import FooterStyles from "../styles/Footer";

function Footer({ language }: props): JSX.Element {
	const data: footer_transcript_object = getTranscript[language].Footer;

	return (
		<Container
			id={"footer"}
			sx={FooterStyles.SectionContainer}
			maxWidth={false}
			disableGutters={true}
		>
			<Typography color={"gray"}>{data.Text}</Typography>
		</Container>
	);
}

export default Footer;
