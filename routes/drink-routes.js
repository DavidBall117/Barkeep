const router = require(`express-promise-router`)();
const { validationResult } = require(`express-validator`);
const { dataUtil } = require(`../utils`);

router.get(`/drinks`, async (req, res) => {
	return res.send(`pong`);
});

router.get(`/drinks/:id`, async (req, res) => {
	return res.send(`pong`);
});

router.get(`/drinks/search/:query`, async (req, res) => {
	return res.send(`pong`);
});

module.exports = router;
