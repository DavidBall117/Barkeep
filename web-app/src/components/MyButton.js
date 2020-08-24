import React from "react";
import { makeStyles, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	button: {
		width: "100%",
		margin: theme.spacing(1),
	},
}));

export default function MyButton(props) {
	const classes = useStyles();
	return (
		<Button
			variant="contained"
			color="primary"
			className={classes.button}
			startIcon={props.startIcon ? props.startIcon : null}
			endIcon={props.endIcon ? props.endIcon : null}
			onClick={props.onClick}
		>
			{props.label}
		</Button>
	);
}
