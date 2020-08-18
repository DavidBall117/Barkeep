const chai = require(`chai`);
const chaiHttp = require(`chai-http`);

const { expect } = chai;
chai.use(chaiHttp);

const server = require(`../app`);

describe(`GET /api/serving-glasses`, () => {
	it(`should return array of serving glasses`, (done) => {
		chai
			.request(server)
			.get(`/api/serving-glasses`)
			.end((err, res) => {
				expect(err).to.be.null;
				expect(res).to.have.status(200);
				expect(res.body)
					.to.be.an(`Array`)
					.that.is.not.empty.to.include(`String`);
				done();
			});
	});
});
