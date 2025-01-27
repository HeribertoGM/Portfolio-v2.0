import { Container, Typography } from "@mui/material";

import { props } from "../types";
import { education_transcript_object } from "../transcripts_types";
import { getTranscript } from "../transcripts";
import tec_logo from "../images/tec_logo.png";
import EducationStyles from "../styles/Education";

function Education({ language, windowSize }: props): JSX.Element {
	const data: education_transcript_object = getTranscript[language].Education;

	return (
		<Container
			id={"education"}
			sx={EducationStyles.SectionContainer}
			maxWidth={false}
			disableGutters={true}
		>
			<Typography variant="h3" sx={EducationStyles.Title}>
				{data.Title}
			</Typography>
			<hr style={EducationStyles.Divider} />
			<Container
				sx={{
					...EducationStyles.InnerContainer,
					flexDirection:
						windowSize.innerWidth > 950 ? "row" : "column",
				}}
				maxWidth={false}
				disableGutters={true}
			>
				<img
					src={tec_logo}
					alt="tec_logo"
					style={EducationStyles.TecLogo}
				/>
				<Container
					sx={{
						...EducationStyles.TextContainer,
						marginLeft:
							windowSize.innerWidth > 950 ? "80px" : "0px",
						marginTop: windowSize.innerWidth > 950 ? "0px" : "50px",
					}}
					maxWidth={false}
					disableGutters={true}
				>
					<Typography variant="h4" sx={EducationStyles.Subtitle}>
						{data.Subtitle}
					</Typography>
					<br />
					<Typography variant="h5" sx={EducationStyles.Text}>
						{data.DateStart} - {data.DateEnd}
					</Typography>
					<Typography variant="h5" sx={EducationStyles.Text}>
						{data.GPA}
					</Typography>
					<Typography variant="h5" sx={EducationStyles.Text}>
						{data.Courses}
					</Typography>
				</Container>
			</Container>
		</Container>
	);
}

export default Education;
