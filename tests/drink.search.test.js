const chai = require(`chai`);
const chaiHttp = require(`chai-http`);

const { expect } = chai;
chai.use(chaiHttp);

const server = require(`../app`);

describe(`GET /api/drinks?alcoholic=true&category=cocktail&glass=cocktail%20glass&ingredient=nutmeg`, () => {
	it(`should return an array of Drink objects`, (done) => {
		chai
			.request(server)
			.get(
				`/api/drinks?alcoholic=true&category=cocktail&glass=cocktail%20glass&ingredient=nutmeg`
			)
			.end((err, res) => {
				expect(err).to.be.null;
				expect(res).to.have.status(200);
				expect(res.body)
					.to.be.an(`Array`)
					.that.is.not.empty.to.include(`Object`);
				done();
			});
	});
});

describe(`GET /api/drinks?alcoholic=true&category=cocktail&glass=cocktail%20glass&ingredient=nutmeg&name=alex`, () => {
	it(`should return an array of Drink objects`, (done) => {
		chai
			.request(server)
			.get(
				`/api/drinks?alcoholic=true&category=cocktail&glass=cocktail%20glass&ingredient=nutmeg&name=alex`
			)
			.end((err, res) => {
				expect(err).to.be.null;
				expect(res).to.have.status(200);
				expect(res.body)
					.to.be.an(`Array`)
					.that.is.not.empty.to.equal([
						{
							id: "740858be-529a-476e-9161-1a8dce23bb49",
							name: "Alexander",
							image:
								"https://www.thecocktaildb.com/images/media/drink/urystu1478253039.jpg",
							ingredients: ["Gin", "Creme de Cacao", "Light cream", "Nutmeg"],
						},
					]);
				done();
			});
	});
});

describe(`GET /api/drinks?alcoholic=null&category=cocktail&glass=cocktail%20glass&ingredient=nutmeg`, () => {
	it(`should return a 400 bad request error`, (done) => {
		chai
			.request(server)
			.get(
				`/api/drinks?alcoholic=null&category=cocktail&glass=cocktail%20glass&ingredient=nutmeg`
			)
			.end((err, res) => {
				expect(err).to.be.null;
				expect(res).to.have.status(400);
				expect(res.body).to.be.an(`Object`);
				done();
			});
	});
});

describe(`GET /api/drinks?alcoholic=true&category=cocktail&glass=cocktail%20glass&ingredient=somekindofingredient`, () => {
	it(`should return a 404 not found error`, (done) => {
		chai
			.request(server)
			.get(
				`/api/drinks?alcoholic=true&category=cocktail&glass=cocktail%20glass&ingredient=somekindofingredient`
			)
			.end((err, res) => {
				expect(err).to.be.null;
				expect(res).to.have.status(404);
				expect(res.text).equal(`Not Found`);
				done();
			});
	});
});
