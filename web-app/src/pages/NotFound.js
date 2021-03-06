import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
		height: "100%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
}));

export default function NotFound() {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Typography variant="h4" component="h1">
				Page Not Found
			</Typography>
		</div>
	);
}
