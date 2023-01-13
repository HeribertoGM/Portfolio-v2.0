import { IconButton } from "@mui/material";
import NorthIcon from "@mui/icons-material/North";

function ScrollUp(): JSX.Element {
	return (
		<IconButton
			sx={{
				backgroundColor: "gray",
				position: "fixed",
				bottom: "25px",
				left: "25px",
			}}
			onClick={() =>
				(window.location.href =
					window.location.href.replace("#header", "") + "#header")
			}
		>
			<NorthIcon sx={{ fontSize: 30 }} />
		</IconButton>
	);
}

export default ScrollUp;
