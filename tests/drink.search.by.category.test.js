const chai = require(`chai`);
const chaiHttp = require(`chai-http`);

const { expect } = chai;
chai.use(chaiHttp);

const server = require(`../app`);

describe(`GET /api/drinks?category=cocktail`, () => {
	it(`should return an array of Drink objects`, (done) => {
		chai
			.request(server)
			.get(`/api/drinks?category=cocktail`)
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

describe(`GET /api/drinks?category=shot`, () => {
	it(`should return an array of Drink objects`, (done) => {
		chai
			.request(server)
			.get(`/api/drinks?category=shot`)
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

describe(`GET /api/drinks?category=somethingtodrink`, () => {
	it(`should return a 404 not found error`, (done) => {
		chai
			.request(server)
			.get(`/api/drinks?category=somethingtodrink`)
			.end((err, res) => {
				expect(err).to.be.null;
				expect(res).to.have.status(404);
				expect(res.text).equal(`Not Found`);
				done();
			});
	});
});
