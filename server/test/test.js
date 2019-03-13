const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');

chai.use(chaiHttp);

describe('Get Health', () => {
  it('It should respond without error', done => {
    chai
      .request(server)
      .get('/api/health')
      .end((err, res) => {
        chai.expect(res).to.have.status(200);
      });
    done();
  });
});