const lookupRoutes = require(`./lookup-routes`);
const drinkRoutes = require(`./drink-routes`);

module.exports = (app) => {
	app.use(`/api/`, lookupRoutes);
	app.use(`/api/drinks`, drinkRoutes);
};
