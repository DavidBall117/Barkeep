const chai = require(`chai`);
const chaiHttp = require(`chai-http`);

const { expect } = chai;
chai.use(chaiHttp);

const server = require(`../app`);

describe(`GET /api/drinks?alcoholic=true`, () => {
	it(`should return an array of Drink objects`, (done) => {
		chai
			.request(server)
			.get(`/api/drinks?alcoholic=true`)
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

describe(`GET /api/drinks?alcoholic=false`, () => {
	it(`should return an array of Drink objects`, (done) => {
		chai
			.request(server)
			.get(`/api/drinks?alcoholic=false`)
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

describe(`GET /api/drinks?alcoholic=null`, () => {
	it(`should return a 400 bad request error`, (done) => {
		chai
			.request(server)
			.get(`/api/drinks?alcoholic=null`)
			.end((err, res) => {
				expect(err).to.be.null;
				expect(res).to.have.status(400);
				expect(res.body).to.be.an(`Object`);
				done();
			});
	});
});
