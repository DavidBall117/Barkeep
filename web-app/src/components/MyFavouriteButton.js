import React, { useState } from "react";
import { Fab } from "@material-ui/core";
import {
	StarBorder as FavouriteIconLines,
	Star as FavouriteIconFilled,
} from "@material-ui/icons";
import { isDrinkFavourited, favouriteDrink } from "../MixologistService";
import MyToast from "./MyToast";

export default function MyFavouriteButton(props) {
	const [favourited, setFavourited] = useState(isDrinkFavourited(props.drink));
	const [toastOpen, setToastOpen] = useState(false);
	const [toastText, setToastText] = useState("");

	const onClick = () => {
		const fav = !favourited;
		setFavourited(fav);
		favouriteDrink(props.drink);
		if (fav) {
			setToastText(`${props.drink.name} added to favourites.`);
			if (props.onFav) {
				props.onFav();
			}
		} else {
			setToastText(`${props.drink.name} removed from favourites.`);
			if (props.onUnfav) {
				props.onUnfav();
			}
		}
		setToastOpen(true);
		if (props.onClick) {
			props.onClick();
		}
	};

	return (
		<React.Fragment>
			<Fab size="small" color="primary" aria-label="add" onClick={onClick}>
				{favourited ? <FavouriteIconFilled /> : <FavouriteIconLines />}
			</Fab>

			<MyToast
				status="info"
				open={toastOpen}
				text={toastText}
				onClose={() => setToastOpen(false)}
			/>
		</React.Fragment>
	);
}
