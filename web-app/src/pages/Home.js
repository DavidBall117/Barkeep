import React, { useState } from "react";
import { makeStyles, Grid } from "@material-ui/core";
import MyRecipeCard from "../components/MyRecipeCard";
import MyToast from "../components/MyToast";
import { getFavouriteDrinks } from "../RestService";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		justifyContent: "center",
		padding: "1rem",
		[theme.breakpoints.up("md")]: {
			padding: "2rem",
		},
	},
	item: {
		maxWidth: 400,
		paddingBottom: "1.5rem",
		[theme.breakpoints.up("sm")]: {
			padding: "1rem",
		},
	},
}));

export default function Home() {
	const classes = useStyles();
	const [drinks, setDrinks] = useState(getFavouriteDrinks());
	const [toastOpen, setToastOpen] = useState(false);
	const [toastText, setToastText] = useState("");

	return (
		<React.Fragment>
			<Grid container className={classes.root}>
				{drinks.map((drink) => (
					<Grid
						item
						key={drink.id}
						xs={12}
						sm={6}
						md={4}
						lg={3}
						className={classes.item}
					>
						<MyRecipeCard
							drink={drink}
							onUnfav={() => {
								setDrinks(getFavouriteDrinks());
								setToastOpen(true);
								setToastText(`${drink.name} removed from favourites.`);
							}}
						/>
					</Grid>
				))}
			</Grid>

			<MyToast
				open={toastOpen}
				status="info"
				text={toastText}
				onClose={() => setToastOpen(false)}
			/>
		</React.Fragment>
	);
}
