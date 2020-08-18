const router = require(`express-promise-router`)();
const { param, query } = require(`express-validator`);
const { validateRequest } = require(`./route-middleware`);
const { drinkRepo } = require(`../repos`);

const dtoGetRecipes = (recipes) => {
	const dtos = [];
	for (let i = 0; i < recipes.length; i++) {
		const ingredients = [];
		for (let j = 0; j < recipes[i].ingredients.length; j++) {
			ingredients.push(recipes[i].ingredients[j].name);
		}
		dtos.push({
			id: recipes[i].id,
			name: recipes[i].name,
			image: recipes[i].image,
			ingredients,
		});
	}
	return dtos;
};

router.get(
	`/`,
	[
		query(`alcoholic`).optional().isBoolean().toBoolean(),
		query(`category`).optional().isString(),
		query(`ingredient`).optional().isString(),
		query(`glass`).optional().isString(),
		query(`name`).optional().isString(),
	],
	validateRequest,
	async (req, res) => {
		const items = await drinkRepo.get(
			req.query.alcoholic,
			req.query.category,
			req.query.ingredient,
			req.query.glass,
			req.query.name
		);
		const dtos = dtoGetRecipes(items);
		if (dtos.length === 0) return res.sendStatus(404);
		return res.send(dtos);
	}
);

router.get(
	`/:id`,
	[param(`id`).isUUID()],
	validateRequest,
	async (req, res) => {
		const item = await drinkRepo.getById(req.params.id);
		if (!item) return res.sendStatus(404);
		return res.send(item);
	}
);

module.exports = router;
