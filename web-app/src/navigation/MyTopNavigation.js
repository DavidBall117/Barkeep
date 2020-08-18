import React from "react";
import {
	makeStyles,
	AppBar,
	Toolbar,
	Typography,
	Button,
} from "@material-ui/core";
import {
	Favorite as FavouriteIcon,
	Search as SearchIcon,
	Category as CategoryIcon,
} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
	title: {
		flexGrow: 1,
	},
	button: {
		marginRight: "2rem",
	},
}));

export default function MyTopNavigation() {
	const classes = useStyles();
	return (
		<AppBar className={classes.root} position="static">
			<Toolbar>
				<Typography variant="h6" className={classes.title}>
					Mixologist
				</Typography>
				<Button
					color="inherit"
					startIcon={<FavouriteIcon />}
					className={classes.button}
				>
					Favourites
				</Button>
				<Button
					color="inherit"
					startIcon={<SearchIcon />}
					className={classes.button}
				>
					Search
				</Button>
				<Button
					color="inherit"
					startIcon={<CategoryIcon />}
					className={classes.button}
				>
					Categories
				</Button>
			</Toolbar>
		</AppBar>
	);
}
