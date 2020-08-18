const chai = require(`chai`);
const chaiHttp = require(`chai-http`);

const { expect } = chai;
chai.use(chaiHttp);

const server = require(`../app`);

describe(`GET /api/lookup/ingredients`, () => {
	it(`should return array of ingredients`, (done) => {
		chai
			.request(server)
			.get(`/api/lookup/ingredients`)
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
