const fs = require(`fs`);
const axios = require(`axios`);
const { v4 } = require(`uuid`);

const BASE_URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=`;
const ALHPABET = `abcdefghijklmnopqrstuvwxyz`;
const DATA_FILE = `data2.js`;

(async () => {
	// scrape all drinks from thecocktaildb
	let drinks = [];
	for (let i = 0; i < ALHPABET.length; i++) {
		const uri = `${BASE_URL}${ALHPABET[i]}`;
		try {
			const response = await axios.get(uri);
			if (!response.data.drinks) {
				continue;
			}
			for (let j = 0; j < response.data.drinks.length; j++) {
				const drink = response.data.drinks[j];

				let ingredients = [];
				for (let num = 1; num <= 15; num++) {
					const ii = `strIngredient` + num;
					const mi = `strMeasure` + num;
					if (drink[ii]) {
						ingredients.push({
							name: drink[ii],
							amount: drink[mi], // NOTE: amount can be null
						});
					} else {
						break;
					}
				}

				drinks.push({
					id: v4(),
					name: drink.strDrink,
					category: drink.strCategory,
					alcoholic: drink.strAlcoholic.toLocaleLowerCase() === `alcoholic`,
					servingGlass: drink.strGlass,
					instructions: drink.strInstructions,
					image: drink.strDrinkThumb,
					ingredients,
				});
			}
		} catch (err) {
			console.log(err);
		}
	}

	// write drinks to a json file
	try {
		const data = JSON.stringify(drinks, null, 4);
		const str = `module.exports = ` + data;
		fs.writeFileSync(DATA_FILE, str);
	} catch (err) {
		console.log(err);
	}
})();
