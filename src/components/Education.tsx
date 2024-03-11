import { useState, useEffect } from "react";
import { Container, Typography } from "@mui/material";

import { props } from "../types";
import { education_transcript_object } from "../transcripts_types";
import { getTranscript } from "../transcripts";
import tec_logo from "../images/tec_logo.png";
import EducationStyles from "../styles/Education";

let getWindowSize = () => {
	const { innerWidth, innerHeight } = window;
	return { innerWidth, innerHeight };
};

function Education({ language }: props): JSX.Element {
	const data: education_transcript_object = getTranscript[language].Education;
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
						{data.Date}
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
