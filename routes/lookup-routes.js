const router = require(`express-promise-router`)();
const { dataUtil } = require(`../utils`);

const getListOf = async (property) => {
	const data = await dataUtil.get();
	const items = new Set();
	for (let i = 0; i < data.length; i++) {
		items.add(data[i][property]);
	}
	return Array.from(items);
};

router.get(`/categories`, async (req, res) => {
	return res.send(await getListOf(`category`));
});

router.get(`/serving-glasses`, async (req, res) => {
	return res.send(await getListOf(`servingGlass`));
});

router.get(`/ingredients`, async (req, res) => {
	const data = await dataUtil.get();
	const ingredients = new Set();
	for (let i = 0; i < data.length; i++) {
		for (let j = 0; j < data[i].ingredients.length; j++) {
			ingredients.add(data[i].ingredients[j].name);
		}
	}
	return res.send(Array.from(ingredients));
});

module.exports = router;
