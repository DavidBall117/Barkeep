// props: appLogoSilhouette: Image, appTitle: "string", pathMap: [ { path: "string", label: "string", icon: <MaterialUIIcon /> } ]

import React from "react";
import {
	makeStyles,
	AppBar,
	Toolbar,
	Typography,
	Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
	logo: {
		maxHeight: 35,
		marginRight: "1rem",
		marginLeft: "1rem",
	},
	denseLogo: {
		maxHeight: 25,
		marginRight: "0.75rem",
		marginLeft: "0.75rem",
	},
	title: {
		flexGrow: 1,
	},
	button: {
		marginRight: "2rem",
	},
}));

export default function MyTopNavigation(props) {
	const classes = useStyles();
	return (
		<AppBar className={classes.root} position="static">
			<Toolbar variant={props.variant} id="BackToTopAnchor">
				<img
					alt=""
					src={props.appLogoSilhouette}
					className={
						props.variant === `dense` ? classes.denseLogo : classes.logo
					}
				/>
				<Typography variant="h6" className={classes.title}>
					{props.appTitle}
				</Typography>
				{props.pathMap &&
					props.pathMap.map((x) => (
						<Button
							key={x.path}
							color="inherit"
							startIcon={x.icon}
							className={classes.button}
							component={Link}
							to={x.path}
						>
							{x.label}
						</Button>
					))}
			</Toolbar>
		</AppBar>
	);
}
