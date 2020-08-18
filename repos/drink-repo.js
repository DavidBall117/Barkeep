const jsonfile = require(`jsonfile`);

let data = null;

const loadData = async () => {
	if (!data) {
		data = await jsonfile.readFile(`data.json`);
	}
};

const retrieveListOf = async (property) => {
	await loadData();
	const items = new Set();
	for (let i = 0; i < data.length; i++) {
		items.add(data[i][property].toLocaleLowerCase());
	}
	return Array.from(items);
};

const get = async (
	alcoholic = null,
	category = null,
	ingredient = null,
	glass = null,
	name = null
) => {
	await loadData();
	const items = data.filter((x) => {
		let validItem = true;
		if (
			alcoholic !== undefined &&
			alcoholic !== null &&
			alcoholic !== x.alcoholic
		) {
			validItem = false;
		}
		if (
			category &&
			!x.category.toLocaleLowerCase().includes(category.toLocaleLowerCase())
		) {
			validItem = false;
		}
		if (ingredient) {
			let hasIngredient = false;
			for (let i = 0; i < x.ingredients.length; i++) {
				if (
					x.ingredients[i].name
						.toLocaleLowerCase()
						.includes(ingredient.toLocaleLowerCase())
				) {
					hasIngredient = true;
				}
			}
			validItem = hasIngredient;
		}
		if (
			glass &&
			!x.servingGlass.toLocaleLowerCase().includes(glass.toLocaleLowerCase())
		) {
			validItem = false;
		}
		if (
			name &&
			!x.name.toLocaleLowerCase().includes(name.toLocaleLowerCase())
		) {
			validItem = false;
		}
		return validItem;
	});
	return items;
};

const getById = async (id) => {
	await loadData();
	return data.find((x) => x.id === id);
};

const getCategories = async () => {
	return retrieveListOf(`category`);
};

const getIngredients = async () => {
	await loadData();
	const ingredients = new Set();
	for (let i = 0; i < data.length; i++) {
		for (let j = 0; j < data[i].ingredients.length; j++) {
			ingredients.add(data[i].ingredients[j].name.toLocaleLowerCase());
		}
	}
	return Array.from(ingredients);
};

const getServingGlasses = async () => {
	return retrieveListOf(`servingGlass`);
};

module.exports = {
	get,
	getById,
	getCategories,
	getIngredients,
	getServingGlasses,
};
