import React, { useState, useEffect } from "react";
import { makeStyles, Container, Typography } from "@material-ui/core";
import { Search as SearchIcon } from "@material-ui/icons";

import MySearchBar from "../components/MySearchBar";
import MyCheckbox from "../components/MyCheckbox";
import MyButton from "../components/MyButton";
import MyLoadingIcon from "../components/MyLoadingIcon";
import MyList from "../components/MyList";
import MyToast from "../components/MyToast";
import { getIngredients, getDrinks } from "../RestService";

const useStyles = makeStyles((theme) => ({
	checkbox: {
		marginLeft: "0.1rem",
	},
	container: {
		display: "flex",
		justifyContent: "center",
	},
}));

export default function Search() {
	const classes = useStyles();
	const [ingredients, setIngredients] = useState([]);
	const [alcoholic, setAlcoholic] = useState(true);
	const [ingredient, setIngredient] = useState(null);
	const [name, setName] = useState("");
	const [drinks, setDrinks] = useState(null);
	const [loading, setLoading] = useState(false);
	const [toastText, setToastText] = useState("");
	const [toastOpen, setToastOpen] = useState(false);
	const [value, setValue] = useState("");

	const fetchIngredients = async () => {
		try {
			const res = await getIngredients();
			setIngredients(res.data);
		} catch (err) {
			setToastText("A network error occured.");
			setToastOpen(true);
		}
	};

	useEffect(() => {
		fetchIngredients().then(() => {
			const alc = JSON.parse(window.localStorage.getItem(`search_alcoholic`));
			const i = window.localStorage.getItem(`search_ingredient`);
			const n = window.localStorage.getItem(`search_name`);
			if (alc !== null) {
				setAlcoholic(alc);
			}
			if (i) {
				setIngredient(i);
			}
			if (n) {
				setName(n);
			}
		});
	}, []);

	const fetchDrinks = async () => {
		setLoading(true);
		const i = ingredient && ingredient !== "" ? ingredient : null;
		const n = name && name !== "" ? name : null;
		try {
			const res = await getDrinks(alcoholic, null, i, null, n);
			setDrinks(res.data);
		} catch (err) {
			if (err.request.status === 404) {
				setDrinks([]);
			} else {
				setToastText("A network error occured.");
				setToastOpen(true);
			}
		}
		window.localStorage.setItem(`search_alcoholic`, JSON.stringify(alcoholic));
		window.localStorage.setItem(`search_ingredient`, i || "");
		window.localStorage.setItem(`search_name`, n || "");
		setLoading(false);
	};

	return (
		<Container fixed>
			<MyCheckbox
				checked={alcoholic}
				setChecked={setAlcoholic}
				label="Alcoholic"
				className={classes.checkbox}
			/>
			<MySearchBar
				label="Ingredient"
				options={ingredients}
				value={ingredient}
				setValue={setIngredient}
			/>
			<MySearchBar
				label="Drink Name"
				freeSolo
				value={value}
				setValue={setValue}
				inputValue={name}
				setInputValue={setName}
			/>

			<div className={classes.container}>
				<MyButton
					label="Search"
					onClick={fetchDrinks}
					startIcon={<SearchIcon />}
				/>
			</div>

			{loading && <MyLoadingIcon />}
			{drinks && drinks.length === 0 && (
				<div className={classes.container}>
					<Typography>No drinks match the given query.</Typography>
				</div>
			)}
			{drinks && drinks.length > 0 && <MyList data={drinks} />}

			<MyToast
				status="error"
				text={toastText}
				open={toastOpen}
				onClose={() => {
					setToastText("");
					setToastOpen(false);
				}}
			/>
		</Container>
	);
}
