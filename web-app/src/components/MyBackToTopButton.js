// props: show, onClick

import React from "react";
import { makeStyles, Fab, Zoom } from "@material-ui/core";
import { KeyboardArrowUp as KeyboardArrowUpIcon } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
	root: {
		position: "fixed",
		bottom: theme.spacing(8),
		right: theme.spacing(4),
		[theme.breakpoints.up("lg")]: {
			bottom: theme.spacing(4),
		},
	},
}));

export default function MyBackToTopButton(props) {
	const classes = useStyles();
	return (
		<Zoom in={props.show} className={classes.root}>
			<Fab
				onClick={props.onClick}
				color="secondary"
				aria-label="scroll back to top"
			>
				<KeyboardArrowUpIcon />
			</Fab>
		</Zoom>
	);
}
