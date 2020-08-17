const router = require(`express-promise-router`)();
const { param, query } = require(`express-validator`);
const { dataUtil } = require(`../utils`);
const { validateRequest } = require(`./route-middleware`);

router.get(
	`/`,
	[
		query(`alcoholic`).optional().isBoolean(),
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
		return res.send({ alcoholic, category, ingredient, glass });
	}
);

router.get(
	`/:id`,
	[param(`id`).isUUID()],
	validateRequest,
	async (req, res) => {
		const id = req.params.id;
		return res.send(id);
	}
);

router.get(
	`/search/:query`,
	[param(`query`).isString().escape()],
	validateRequest,
	async (req, res) => {
		const query = req.params.query;
		return res.send(query);
	}
);

module.exports = router;
