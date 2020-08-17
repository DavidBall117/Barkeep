const jsonfile = require(`jsonfile`);

let data = null;

const get = async () => {
	if (!data) {
		data = jsonfile.readFile(`data.json`);
	}
	return data;
};

module.exports = {
	get,
};
