const router = require(`express-promise-router`)();
const lookupRoutes = require(`./lookup-routes`);
const drinkRoutes = require(`./drink-routes`);

router.get(`/`, async (req, res) => {
	return res.send({
		api: {
			title: "Mixologist Recipes API",
			links: {
				author: "https://github.com/DavidBall117",
				describedBy: "http://localhost:5000/api-docs",
			},
		},
	});
});

module.exports = (app) => {
	app.use(`/api`, router);
	app.use(`/api/lookup`, lookupRoutes);
	app.use(`/api/drinks`, drinkRoutes);
};
