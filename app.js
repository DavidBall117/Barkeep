require(`dotenv`).config();
const path = require(`path`);
const express = require(`express`);
const app = express();
const bodyParser = require(`body-parser`);
const cors = require(`cors`)();
const helmet = require(`helmet`);
const port = process.env.PORT || 5000;
const env = process.env.NODE_ENV || `local`;
const maxAge = process.env.CACHE_CONTROL_MAX_AGE || 2592000;
const routes = require(`./routes`);

if (env === `local`) {
}
app.use(cors);

if (env === `production`) {
	app.enable(`trust proxy`);
	app.use(helmet());
	app.use((req, res, next) => {
		res.set(`Cache-Control`, `public, max-age=${maxAge}`);
		next();
	});
}

// utilities
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// api routes
routes(app);
app.get(`/api/*`, (req, res) => {
	res.sendStatus(404);
});

// api docs
const swaggerUi = require(`swagger-ui-express`);
const YAML = require(`yamljs`);
const swaggerDocument = YAML.load(path.join(__dirname, `swagger.yaml`));
app.use(`/api-docs`, swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// web app routes
app.use(express.static(path.join(__dirname, `web-app/build`)));
app.get(`/*`, (req, res) => {
	res.sendFile(path.join(__dirname, `web-app/build`, `index.html`));
});

// error handling
app.use((err, req, res, next) => {
	if (err.name === `BadRequest`) {
		res.status(400).send(JSON.parse(err.message));
	} else if (err.name === `NotFound`) {
		res.sendStatus(404);
	} else {
		res.sendStatus(500);
		console.error(err);
	}
	next();
});

// listen for requests
const server = app.listen(port, () => {
	console.log(`listening on port ${port} - ${env}`);
});

module.exports = server;
