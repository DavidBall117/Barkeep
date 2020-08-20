import React from "react";
import { makeStyles, CircularProgress } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
		height: "100%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		"& > * + *": {
			marginLeft: theme.spacing(2),
		},
	},
}));

export default function MyLoadingIcon() {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<CircularProgress color="secondary" />
		</div>
	);
}
