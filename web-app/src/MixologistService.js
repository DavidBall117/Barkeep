import axios from "axios";
import queryString from "query-string";

const baseUrl = process.env.REACT_APP_API_URI;
const get = async (endpoint) => {
	const uri = `${baseUrl}${endpoint}`;
	return await axios.get(uri);
};

export const getDrink = async (id) => {
	return get(`/drinks/${id}`);
};

export const getDrinks = async (
	alcoholic = null,
	category = null,
	ingredient = null,
	glass = null,
	name = null
) => {
	let endpoint = `/drinks?`;
	let query = {};
	if (alcoholic) query.alcoholic = alcoholic;
	if (category) query.category = category;
	if (ingredient) query.ingredient = ingredient;
	if (glass) query.glass = glass;
	if (name) query.name = name;
	endpoint += queryString.stringify(query);
	return get(endpoint);
};

export const getCategories = async () => {
	return get(`/lookup/categories`);
};

export const getIngredients = async () => {
	return get(`/lookup/ingredients`);
};

export const getGlasses = async () => {
	return get(`/lookup/serving-glasses`);
};

const DRINKS_KEY = `01982347108293487`;

export const isDrinkFavourited = (drink) => {
	const drinks = JSON.parse(window.localStorage.getItem(DRINKS_KEY)) || [];
	return drinks.findIndex((x) => x.id === drink.id) !== -1;
};

export const favouriteDrink = (drink) => {
	let drinks = JSON.parse(window.localStorage.getItem(DRINKS_KEY)) || [];
	const index = drinks.findIndex((x) => x.id === drink.id);
	if (index === -1) {
		drink.addedOn = new Date();
		drinks = [drink, ...drinks];
	} else {
		drinks.splice(index, 1);
	}
	window.localStorage.setItem(DRINKS_KEY, JSON.stringify(drinks));
};

export const getFavouriteDrinks = () => {
	return JSON.parse(window.localStorage.getItem(DRINKS_KEY)) || [];
};
