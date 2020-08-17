const router = require(`express-promise-router`)();
const { param, query } = require(`express-validator`);
const { validateRequest } = require(`./route-middleware`);
const { dataUtil } = require(`../utils`);

router.get(
	`/`,
	[
		query(`alcoholic`).optional().isBoolean().toBoolean(),
		query(`category`).optional().isString().escape(),
		query(`ingredient`).optional().isString().escape(),
		query(`glass`).optional().isString().escape(),
	],
	validateRequest,
	async (req, res) => {
		const alcoholic = req.query.alcoholic;
		const category = req.query.category;
		const ingredient = req.query.ingredient;
		const glass = req.query.glass;

		const data = await dataUtil.get();
		const items = data.filter((x) => {
			let validItem = true;
			if (alcoholic !== undefined && alcoholic !== x.alcoholic) {
				validItem = false;
			}
			if (
				category &&
				category.toLocaleLowerCase() !== x.category.toLocaleLowerCase()
			) {
				validItem = false;
			}
			if (ingredient) {
				let hasIngredient = false;
				for (let i = 0; i < x.ingredients.length; i++) {
					if (
						ingredient.toLocaleLowerCase() ===
						x.ingredients[i].name.toLocaleLowerCase()
					) {
						hasIngredient = true;
					}
				}
				validItem = hasIngredient;
			}
			if (
				glass &&
				glass.toLocaleLowerCase() !== x.servingGlass.toLocaleLowerCase()
			) {
				validItem = false;
			}
			return validItem;
		});

		const dtos = [];
		for (let i = 0; i < items.length; i++) {
			dtos.push({
				id: items[i].id,
				name: items[i].name,
				image: items[i].image,
			});
		}

		if (dtos.length === 0) return res.sendStatus(404);
		return res.send(dtos);
	}
);

router.get(
	`/:id`,
	[param(`id`).isUUID()],
	validateRequest,
	async (req, res) => {
		const id = req.params.id;

		const data = await dataUtil.get();
		const item = data.find((x) => x.id === id);

		if (!item) return res.sendStatus(404);
		return res.send(item);
	}
);

router.get(
	`/search/:query`,
	[param(`query`).isString().escape()],
	validateRequest,
	async (req, res) => {
		const query = req.params.query.toLocaleLowerCase();

		const data = await dataUtil.get();
		const items = data.filter((x) =>
			x.name.toLocaleLowerCase().includes(query)
		);

		if (items.length === 0) return res.sendStatus(404);
		return res.send(items);
	}
);

module.exports = router;
