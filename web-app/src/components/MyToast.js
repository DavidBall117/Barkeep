// props: open, status, text, onClose

import React from "react";
import { makeStyles, IconButton, Collapse } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { Close as CloseIcon } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
	root: {
		position: "fixed",
		right: "1rem",
		left: "1rem",
		bottom: theme.spacing(8),
		[theme.breakpoints.up("lg")]: {
			bottom: theme.spacing(1),
		},
	},
}));

export default function MyToast(props) {
	const classes = useStyles();
	return (
		<Collapse in={props.open} className={classes.root}>
			<Alert
				variant="filled"
				severity={props.status}
				action={
					<IconButton
						aria-label="close"
						color="inherit"
						size="small"
						onClick={props.onClose}
					>
						<CloseIcon fontSize="inherit" />
					</IconButton>
				}
			>
				{props.text}
			</Alert>
		</Collapse>
	);
}
