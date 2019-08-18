let Thread = require('../models/Thread');

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
const should = chai.should();
// server.close();

chai.use(chaiHttp);


describe('/POST thread', () => {
    it('it should not POST a thread without pages field', (done) => {
        let thread = new Thread ({
            pname: "CO",
            pvalue: 122,
            cname: 'pdp',
            cemailid: ' '
        })
      chai.request(`http://localhost:5000/`)
          .post('api/threads/createThreads')
          .send(thread)
          .end((err, res) => {
                res.should.have.status(400);
            done();
          });
    });
    it('it should POST a thread ', (done) => {
        let thread = {
            pname: "CO",
            pvalue: '122',
            cname: 'pdp',
            cemailid: 'pdp@pdp.com'
        }
      chai.request(`http://localhost:5000/`)
          .post('api/threads/createThreads')
          .send(thread)
          .end((err, res) => {
                res.should.have.status(200);
            done();
          });
    });
});
