const router = require(`express-promise-router`)();
const { drinkRepo } = require(`../repos`);

router.get(`/categories`, async (req, res) => {
	return res.send((await drinkRepo.getCategories()).sort());
});

router.get(`/ingredients`, async (req, res) => {
	return res.send((await drinkRepo.getIngredients()).sort());
});

router.get(`/serving-glasses`, async (req, res) => {
	return res.send((await drinkRepo.getServingGlasses()).sort());
});

module.exports = router;
