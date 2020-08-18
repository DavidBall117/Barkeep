const chai = require(`chai`);
const chaiHttp = require(`chai-http`);

const { expect } = chai;
chai.use(chaiHttp);

const server = require(`../app`);

describe(`GET /api/drinks?name=margar`, () => {
	it(`should return an array of Drink objects`, (done) => {
		chai
			.request(server)
			.get(`/api/drinks?name=margar`)
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

describe(`GET /api/drinks/drinks?name=margarita`, () => {
	it(`should return an array of Drink objects`, (done) => {
		chai
			.request(server)
			.get(`/api/drinks?name=margarita`)
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

describe(`GET /api/drinks?name=Tommy%27s%20Margarita`, () => {
	it(`should return an array of one Drink object`, (done) => {
		chai
			.request(server)
			.get(`/api/drinks?name=Tommy%27s%20Margarita`)
			.end((err, res) => {
				expect(err).to.be.null;
				expect(res).to.have.status(200);
				expect(res.body)
					.to.be.an(`Array`)
					.that.is.not.empty.to.equal([
						{
							id: "1eb2a0aa-224f-4f44-be8c-255899622121",
							name: "Tommy's Margarita",
							image:
								"https://www.thecocktaildb.com/images/media/drink/loezxn1504373874.jpg",
							ingredients: ["Tequila", "Lime Juice", "Agave syrup"],
						},
					]);
				done();
			});
	});
});

describe(`GET /api/drinks?name=Tommy's Margarita`, () => {
	it(`should return an array of one Drink object`, (done) => {
		chai
			.request(server)
			.get(`/api/drinks?name=Tommy's Margarita`)
			.end((err, res) => {
				expect(err).to.be.null;
				expect(res).to.have.status(200);
				expect(res.body)
					.to.be.an(`Array`)
					.that.is.not.empty.to.equal([
						{
							id: "1eb2a0aa-224f-4f44-be8c-255899622121",
							name: "Tommy's Margarita",
							image:
								"https://www.thecocktaildb.com/images/media/drink/loezxn1504373874.jpg",
							ingredients: ["Tequila", "Lime Juice", "Agave syrup"],
						},
					]);
				done();
			});
	});
});

describe(`GET /api/drinks?name=margaritaaa`, () => {
	it(`should return a 404 not found error`, (done) => {
		chai
			.request(server)
			.get(`/api/drinks?name=margaritaaa`)
			.end((err, res) => {
				expect(err).to.be.null;
				expect(res).to.have.status(404);
				expect(res.text).equal(`Not Found`);
				done();
			});
	});
});
