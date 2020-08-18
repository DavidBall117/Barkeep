import React from "react";
import { makeStyles, Container } from "@material-ui/core";
import MyTopNavigation from "../navigation/MyTopNavigation";
import MyBottomNavigation from "../navigation/MyBottomNavigation";

const useStyles = makeStyles((theme) => ({
	root: {
		height: "100%",
		display: "flex",
		flexDirection: "column",
	},
	outerContainer: {
		flexGrow: 1,
		position: "relative",
	},
	innerContainer: {
		position: "absolute",
		width: "100%",
		height: "100%",
		overflowY: "auto",
	},
}));

export default function MasterLayout(props) {
	const classes = useStyles();

	return (
		<Container maxWidth="xl" disableGutters className={classes.root}>
			<MyTopNavigation />
			<Container
				maxWidth="xl"
				disableGutters
				className={classes.outerContainer}
			>
				<Container
					maxWidth="xl"
					disableGutters
					className={classes.innerContainer}
				>
					{props.children}
				</Container>
			</Container>
			<MyBottomNavigation />
		</Container>
	);
}
