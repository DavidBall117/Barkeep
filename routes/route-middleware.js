const { validationResult } = require(`express-validator`);
const { BadRequest } = require(`../errs`);

const validateRequest = (req, res, next) => {
	const validationErrors = validationResult(req);
	if (!validationErrors.isEmpty()) {
		throw new BadRequest(JSON.stringify(validationErrors));
	}
	next();
};

module.exports = {
	validateRequest,
};
