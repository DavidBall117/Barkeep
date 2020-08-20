// props: fetchData(), title, icon, children

import React, { useState, useEffect } from "react";
import { makeStyles, Typography, Container, Icon } from "@material-ui/core";
import MyBackButton from "../components/MyBackButton";
import MyLoadingIcon from "../components/MyLoadingIcon";
import MyToast from "../components/MyToast";

const useStyles = makeStyles((theme) => ({
	titleBar: {
		marginTop: "0.5rem",
		marginBottom: "0.5rem",
		display: "flex",
		alignItems: "center",
	},
	title: {
		flexGrow: 1,
		textAlign: "center",
		margin: 0,
	},
	icon: {
		backgroundColor: theme.palette.primary.light,
		height: 40,
		width: 40,
		borderRadius: "50%",
	},
}));

export default function MyPage(props) {
	const classes = useStyles();

	const [loading, setLoading] = useState(true);
	const [toastText, setToastText] = useState("");
	const [toastOpen, setToastOpen] = useState(false);
	const { fetchData } = props;

	function effect() {
		setLoading(true);
		fetchData()
			.then(() => {
				setLoading(false);
			})
			.catch((err) => {
				console.error(err);
				setLoading(false);
				setToastText("A network error occured.");
				setToastOpen(true);
			});
	}

	useEffect(effect, []);

	return (
		<React.Fragment>
			{loading ? (
				<MyLoadingIcon />
			) : (
				<Container>
					<div className={classes.titleBar}>
						<MyBackButton />
						<Typography
							gutterBottom
							variant="h4"
							component="h1"
							className={classes.title}
						>
							{props.title}
						</Typography>
						{props.icon && <Icon className={classes.icon}>{props.icon}</Icon>}
					</div>

					{props.children}
				</Container>
			)}

			<MyToast
				status="error"
				text={toastText}
				open={toastOpen}
				onClose={() => {
					setToastText("");
					setToastOpen(false);
				}}
			/>
		</React.Fragment>
	);
}
