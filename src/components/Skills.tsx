import { useEffect, useState } from "react";
import {
	Container,
	Typography,
	Box,
	CircularProgress,
	Grid,
} from "@mui/material";

import { props, skills_item_props } from "../types";
import {
	skills_transcript_object,
	skills_item_object,
} from "../transcripts_types";
import { getTranscript } from "../transcripts";
import SkillStyles from "../styles/Skill";

function SkillBadge(props: skills_item_props): JSX.Element {
	let { id, elem, size, tagYears } = props;
	const [isInside, setIsInside] = useState(false);
	const skill_color = {
		1: "#FF0000",
		2: "#FFA700",
		3: "#FFF400",
		4: "#A3FF00",
		5: "#2CBA00",
	};

	return (
		<Box key={id} sx={SkillStyles.SkillBadgeBox}>
			<CircularProgress
				variant="determinate"
				value={isInside ? elem.skill * 20 : 0}
				size={isInside ? size + 20 : size}
				sx={{
					...SkillStyles.SkillBadgeCircularProgress,
					color: skill_color[elem.skill as keyof {}],
				}}
			/>
			<Box
				sx={SkillStyles.SkillBadgeInnerBox}
				onMouseEnter={() => {
					setIsInside(true);
				}}
				onMouseLeave={() => {
					setIsInside(false);
				}}
			>
				{isInside ? (
					<div style={SkillStyles.SkillBadgeText}>
						<Typography>{elem.name}</Typography>
						<Typography>
							{elem.years} {tagYears}
						</Typography>
					</div>
				) : (
					<Typography>{elem.name}</Typography>
				)}
			</Box>
		</Box>
	);
}

function Skills({ language }: props): JSX.Element {
	const data: skills_transcript_object = getTranscript[language].Skills;
	const [types, setTypes] = useState<{
		[key: string]: skills_item_object[][];
	}>({});
	const [size, setSize] = useState(-1);

	useEffect(() => {
		let reshapeByType = (filtered: skills_item_object[]) => {
			filtered.sort((a, b) => {
				if (a.name.length > highest) highest = a.name.length;
				return b.skill - a.skill || a.name.localeCompare(b.name);
			});

			let shaped = [];
			let low = 0;
			let high = 4;
			while (low < filtered.length) {
				shaped.push(filtered.slice(low, high));
				low += 4;
				high += 4;
			}

			return shaped;
		};

		let highest = 6;

		let reshapedByType = {
			language: reshapeByType(
				data.Skills.filter((e) => e.type === "language")
			),
			framework: reshapeByType(
				data.Skills.filter((e) => e.type === "framework")
			),
			cloud: reshapeByType(data.Skills.filter((e) => e.type === "cloud")),
			other: reshapeByType(data.Skills.filter((e) => e.type === "other")),
		};

		setSize(65 + (highest - 6) * 9);
		setTypes(reshapedByType);
	}, []);

	return (
		<Container
			id={"skills"}
			sx={SkillStyles.SectionContainer}
			maxWidth={false}
			disableGutters={true}
		>
			<Typography variant="h3" sx={SkillStyles.Title}>
				{data.Title}
			</Typography>
			<hr style={SkillStyles.Divider} />
			{Object.keys(types).map((type, i) => {
				return (
					<div key={i} style={SkillStyles.SkillSectionBox}>
						<div style={SkillStyles.SkillSectionTitle}>
							<hr style={SkillStyles.TypeDivider} />
							<Typography variant="h5" sx={SkillStyles.TypeTitle}>
								{data.TypeSectionsTitles[`${type}`]}
							</Typography>
							<hr style={SkillStyles.TypeDivider} />
						</div>
						{types[type].map((row, id) => {
							return (
								<Grid key={id} container spacing={3} my={1}>
									{row.map((item, idx) => {
										return (
											<Grid
												key={idx}
												item
												xs
												sx={SkillStyles.SkillSectionRow}
											>
												<SkillBadge
													id={idx}
													elem={item}
													size={size}
													tagYears={data.TagYears}
												/>
											</Grid>
										);
									})}
								</Grid>
							);
						})}
					</div>
				);
			})}
		</Container>
	);
}

export default Skills;
