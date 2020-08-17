const jsonfile = require(`jsonfile`);

const get = async () => {
	return jsonfile.readFile(`data.json`);
};

module.exports = {
	get,
};
