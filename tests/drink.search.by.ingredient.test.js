const chai = require(`chai`);
const chaiHttp = require(`chai-http`);

const { expect } = chai;
chai.use(chaiHttp);

const server = require(`../app`);

describe(`GET /api/drinks?ingredient=vodka`, () => {
	it(`should return an array of Drink objects`, (done) => {
		chai
			.request(server)
			.get(`/api/drinks?ingredient=vodka`)
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

describe(`GET /api/drinks?ingredient=nutmeg`, () => {
	it(`should return an array of Drink objects`, (done) => {
		chai
			.request(server)
			.get(`/api/drinks?ingredient=nutmeg`)
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

describe(`GET /api/drinks?ingredient=somekindofdrinkthing`, () => {
	it(`should return a 404 not found error`, (done) => {
		chai
			.request(server)
			.get(`/api/drinks?ingredient=somekindofdrinkthing`)
			.end((err, res) => {
				expect(err).to.be.null;
				expect(res).to.have.status(404);
				expect(res.text).equal(`Not Found`);
				done();
			});
	});
});
