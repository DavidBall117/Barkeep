const router = require(`express-promise-router`)();
const { drinkRepo } = require(`../repos`);

router.get(`/categories`, async (req, res) => {
	return res.send(await drinkRepo.getCategories());
});

router.get(`/ingredients`, async (req, res) => {
	return res.send(await drinkRepo.getIngredients());
});

router.get(`/serving-glasses`, async (req, res) => {
	return res.send(await drinkRepo.getServingGlasses());
});

module.exports = router;
