import React from "react";
import { makeStyles, Chip } from "@material-ui/core";
import { v4 as uuidv4 } from "uuid";

const useStyles = makeStyles((theme) => ({
	root: {
		marginRight: "0.2rem",
		marginBottom: "0.2rem",
	},
}));

export default function MyIngredientChips(props) {
	const classes = useStyles();
	return (
		<React.Fragment>
			{props.ingredients.map((x) => {
				return (
					<Chip
						color="secondary"
						size="small"
						key={uuidv4()}
						label={x}
						className={classes.root}
					/>
				);
			})}
		</React.Fragment>
	);
}
