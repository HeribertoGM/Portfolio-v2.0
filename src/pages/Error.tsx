import { Container, Paper, Grid, Typography } from "@mui/material";

import ErrorStyles from "../styles/Error";

function Error(): JSX.Element {
	return (
		<Container
			maxWidth={false}
			disableGutters={true}
			sx={ErrorStyles.Container}
		>
			<Paper elevation={24} sx={ErrorStyles.Paper}>
				<Grid container spacing={2}>
					<Grid item xs={6}>
						<Container
							style={{
								...ErrorStyles.Column,
								alignItems: "center",
							}}
						>
							<img
								src={require(`../images/Batman.webp`)}
								style={ErrorStyles.Img}
							/>
						</Container>
					</Grid>
					<Grid item xs={6}>
						<Container
							style={{
								...ErrorStyles.Column,
								alignItems: "flex-start",
							}}
						>
							<Typography variant="h2" sx={ErrorStyles.Title}>
								Error 404
							</Typography>
							<Typography variant="h5" sx={ErrorStyles.Subtitle}>
								This page don't exist or some error has
								occurred.
							</Typography>
						</Container>
					</Grid>
				</Grid>
			</Paper>
		</Container>
	);
}

export default Error;
