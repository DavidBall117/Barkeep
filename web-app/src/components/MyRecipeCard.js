import React from "react";
import clsx from "clsx";
import {
	makeStyles,
	Card,
	CardHeader,
	CardMedia,
	CardContent,
	CardActions,
	Collapse,
	IconButton,
	Typography,
	Icon,
} from "@material-ui/core";
import { ExpandMore as ExpandMoreIcon } from "@material-ui/icons";
import MyFavouriteButton from "../components/MyFavouriteButton";
import MyIngredientList from "../components/MyIngredientList";
import MyIngredientChips from "../components/MyIngredientChips";
import Alcoholic from "../assets/icons/alcoholic.svg";
import NonAlcoholic from "../assets/icons/non-alcoholic.svg";

const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: "100%",
		backgroundColor: theme.palette.primary.light,
	},
	media: {
		height: 0,
		paddingTop: "56.25%", // 16:9
	},
	expand: {
		transform: "rotate(0deg)",
		marginLeft: "auto",
		transition: theme.transitions.create("transform", {
			duration: theme.transitions.duration.shortest,
		}),
	},
	expandOpen: {
		transform: "rotate(180deg)",
	},
	instructionsTitle: {
		paddingTop: "0.75rem",
		borderTop: "thin solid black",
	},
}));

export default function MyRecipeCard(props) {
	const classes = useStyles();
	const [expanded, setExpanded] = React.useState(false);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	return (
		<Card className={classes.root} elevation={3}>
			<CardHeader
				action={
					<IconButton disabled>
						<Icon>
							{props.drink.alcoholic ? (
								<img alt="" src={Alcoholic} />
							) : (
								<img alt="" src={NonAlcoholic} />
							)}
						</Icon>
					</IconButton>
				}
				title={props.drink.name}
				subheader={`Added On: ${new Date(
					props.drink.addedOn
				).toLocaleDateString()}`}
			/>

			<CardMedia className={classes.media} image={props.drink.image} title="" />

			<CardContent>
				<MyIngredientChips
					ingredients={props.drink.ingredients.map((x) => x.name)}
				/>
			</CardContent>

			<CardActions disableSpacing>
				<MyFavouriteButton drink={props.drink} onUnfav={props.onUnfav} />
				<IconButton
					className={clsx(classes.expand, {
						[classes.expandOpen]: expanded,
					})}
					onClick={handleExpandClick}
					aria-expanded={expanded}
					aria-label="show more"
				>
					<ExpandMoreIcon />
				</IconButton>
			</CardActions>

			<Collapse in={expanded} timeout="auto" unmountOnExit>
				<CardContent>
					<MyIngredientList
						drinkId={props.drink.id}
						ingredients={props.drink.ingredients}
					/>
					<Typography
						variant="h6"
						component="h2"
						className={classes.instructionsTitle}
						gutterBottom
					>
						Instructions:
					</Typography>
					<Typography paragraph>
						{`${props.drink.instructions} Serve in a ${props.drink.servingGlass}`}
					</Typography>
				</CardContent>
			</Collapse>
		</Card>
	);
}
