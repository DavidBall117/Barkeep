const chai = require(`chai`);
const chaiHttp = require(`chai-http`);

const { expect } = chai;
chai.use(chaiHttp);

const server = require(`../app`);

describe(`GET /api/drinks?glass=cocktail glass`, () => {
	it(`should return an array of Drink objects`, (done) => {
		chai
			.request(server)
			.get(`/api/drinks?glass=cocktail glass`)
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

describe(`GET /api/drinks?glass=shot glass`, () => {
	it(`should return an array of Drink objects`, (done) => {
		chai
			.request(server)
			.get(`/api/drinks?glass=shot glass`)
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

describe(`GET /api/drinks?glass=somethingtodrinkfrom`, () => {
	it(`should return a 404 not found error`, (done) => {
		chai
			.request(server)
			.get(`/api/drinks?glass=somethingtodrinkfrom`)
			.end((err, res) => {
				expect(err).to.be.null;
				expect(res).to.have.status(404);
				expect(res.text).equal(`Not Found`);
				done();
			});
	});
});
