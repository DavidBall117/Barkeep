import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { makeStyles, Grid, Typography } from "@material-ui/core";
import { getDrink } from "../MixologistService";
import MyPage from "../components/MyPage";
import MyFavouriteButton from "../components/MyFavouriteButton";
import MyIngredientList from "../components/MyIngredientList";
import Alcoholic from "../assets/icons/alcoholic.svg";
import NonAlcoholic from "../assets/icons/non-alcoholic.svg";

const useStyles = makeStyles((theme) => ({
	root: {
		padding: "2rem",
		backgroundColor: theme.palette.primary.light,
		borderRadius: "1rem",
		marginTop: "2rem",
		marginBottom: "2rem",
		boxShadow:
			"0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12)",
	},
	imageContainer: {
		textAlign: "center",
	},
	image: {
		width: "100%",
		maxWidth: 300,
		borderRadius: "50%",
		[theme.breakpoints.up("md")]: {
			maxWidth: "100%",
		},
		border: "thick solid white",
	},
	ingredients: {
		paddingTop: "2rem",
		[theme.breakpoints.up("sm")]: {
			paddingLeft: "3rem",
			paddingTop: 0,
		},
		[theme.breakpoints.up("md")]: {
			paddingLeft: "4rem",
		},
		[theme.breakpoints.up("lg")]: {
			paddingLeft: "5rem",
		},
	},
	instructions: {
		paddingTop: "3rem",
		paddingBottom: "2rem",
	},
	favouriteIcon: {
		display: "flex",
		justifyContent: "center",
		paddingTop: "2rem",
	},
	header: {
		borderBottom: "thin solid black",
	},
}));

export default function Recipe() {
	const classes = useStyles();
	const { id } = useParams();

	const [drink, setDrink] = useState({ id: "", name: "", ingredients: [] });

	async function fetchData() {
		const response = await getDrink(id);
		setDrink(response.data);
	}

	return (
		<MyPage
			title={`${drink.name}`}
			fetchData={fetchData}
			icon={
				<React.Fragment>
					{drink.alcoholic ? (
						<img alt="alcoholic drink" src={Alcoholic} />
					) : (
						<img alt="non alcoholic drink" src={NonAlcoholic} />
					)}
				</React.Fragment>
			}
		>
			<Grid container className={classes.root}>
				<Grid item xs={12} sm={4} md={3} className={classes.imageContainer}>
					<img alt="" src={drink.image} className={classes.image} />
				</Grid>
				<Grid item xs={12} sm={8} md={9} className={`${classes.ingredients}`}>
					<Typography variant="h6" component="h2" className={classes.header}>
						Ingredients:
					</Typography>
					<MyIngredientList
						drinkId={drink.id}
						ingredients={drink.ingredients}
					/>
				</Grid>

				<Grid item xs={12} className={`${classes.instructions}`}>
					<Typography variant="h6" component="h2" className={classes.header}>
						Instructions:
					</Typography>
					<Typography gutterBottom variant="body1" component="p">
						{`${drink.instructions} Serve in a ${drink.servingGlass}`}
					</Typography>
				</Grid>

				<Grid item xs={12} className={classes.favouriteIcon}>
					<MyFavouriteButton drink={drink} />
				</Grid>
			</Grid>
		</MyPage>
	);
}
