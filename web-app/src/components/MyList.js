import React from "react";
import { useHistory } from "react-router-dom";
import {
	makeStyles,
	List,
	ListItem,
	ListItemText,
	ListItemAvatar,
	Avatar,
	ListItemIcon,
	Typography,
} from "@material-ui/core";
import { NavigateNext as NavigateNextIcon } from "@material-ui/icons";
import MyIngredientChips from "../components/MyIngredientChips";

const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
	},
	listItem: {
		backgroundColor: theme.palette.primary.light,
		marginBottom: "0.35rem",
		boxShadow:
			"0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12)",
	},
}));

export default function MyList(props) {
	const classes = useStyles();
	const history = useHistory();
	return (
		<List className={classes.root}>
			{props.data.map((x) => {
				return (
					<ListItem
						button
						key={x.id}
						className={classes.listItem}
						onClick={() => history.push(`/recipe/${x.id}`)}
					>
						<ListItemAvatar>
							<Avatar alt={`image of ${x.name}`} src={x.image} />
						</ListItemAvatar>
						<ListItemText>
							<Typography gutterBottom variant="h6" component="h2">
								{x.name}
							</Typography>
							<MyIngredientChips ingredients={x.ingredients} />
						</ListItemText>
						<ListItemIcon>
							<NavigateNextIcon />
						</ListItemIcon>
					</ListItem>
				);
			})}
		</List>
	);
}
