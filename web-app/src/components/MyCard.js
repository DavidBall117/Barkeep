// props: title, onClick, children

import React from "react";
import {
	makeStyles,
	Button,
	Card,
	CardContent,
	Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	root: {
		width: 275,
		maxWidth: "100%",
	},
	card: {
		width: "100%",
		height: "100%",
		backgroundColor: theme.palette.primary.light,
	},
	title: {
		wordBreak: "break-all",
	},
}));

export default function MyCard(props) {
	const classes = useStyles();
	return (
		<Button className={classes.root} onClick={props.onClick}>
			<Card className={classes.card} raised>
				<CardContent>
					<Typography
						gutterBottom
						variant="h6"
						component="h2"
						className={classes.title}
					>
						{props.title}
					</Typography>
					{props.children && (
						<Typography variant="body2" component="p">
							{props.children}
						</Typography>
					)}
				</CardContent>
			</Card>
		</Button>
	);
}
