import React from "react";
import { makeStyles, Container, Hidden } from "@material-ui/core";
import {
	Star as FavouriteIcon,
	Search as SearchIcon,
	Category as CategoryIcon,
} from "@material-ui/icons";

import Logo from "../assets/barLogoLight.svg";
import MyTopNavigation from "../navigation/MyTopNavigation";
import MyBottomNavigation from "../navigation/MyBottomNavigation";
import MyBackToTopButton from "../components/MyBackToTopButton";

const pathMap = [
	{
		path: "/",
		label: "Favourites",
		icon: <FavouriteIcon />,
	},
	{
		path: "/search",
		label: "Search",
		icon: <SearchIcon />,
	},
	{
		path: "/categories",
		label: "Categories",
		icon: <CategoryIcon />,
	},
];

const useStyles = makeStyles((theme) => ({
	root: {
		height: "100%",
		display: "flex",
		flexDirection: "column",
	},
	outerContainer: {
		flexGrow: 1,
		position: "relative",
	},
	innerContainer: {
		position: "absolute",
		width: "100%",
		height: "100%",
		overflowY: "auto",
		padding: "0.5rem",
		scrollBehavior: "smooth",
	},
}));

export default function MasterLayout(props) {
	const classes = useStyles();
	const [showScrollButton, setShowScrollButton] = React.useState(false);
	return (
		<Container maxWidth="xl" disableGutters className={classes.root}>
			<Hidden mdDown>
				<MyTopNavigation
					appLogoSilhouette={Logo}
					appTitle="Barkeep"
					pathMap={pathMap}
				/>
			</Hidden>
			<Hidden lgUp>
				<MyTopNavigation
					appLogoSilhouette={Logo}
					appTitle="Barkeep"
					variant="dense"
				/>
			</Hidden>

			<Container
				maxWidth="xl"
				disableGutters
				className={classes.outerContainer}
			>
				<Container
					maxWidth="xl"
					disableGutters
					className={classes.innerContainer}
					id="MainContainer"
					onScroll={(e) => {
						e.target.id === "MainContainer" &&
						e.target.scrollTop > e.target.clientHeight * 2
							? setShowScrollButton(true)
							: setShowScrollButton(false);
					}}
				>
					{props.children}
					<MyBackToTopButton
						show={showScrollButton}
						onClick={(e) => {
							document.getElementById("MainContainer").scrollTop = 0;
						}}
					/>
				</Container>
			</Container>

			<Hidden lgUp>
				<MyBottomNavigation pathMap={pathMap} />
			</Hidden>
		</Container>
	);
}
