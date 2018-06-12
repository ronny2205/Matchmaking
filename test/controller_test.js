const expect  = require('chai').expect;
const request = require('request');

describe('GET - match path', () => {
  it('should return success status when calling the match path', function(done) {
    request('http://localhost:3000/players/5/match' , function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
    });
  });

  it('should return not found status when calling an unknown path', function(done) {
    request('http://localhost:3000/' , function(error, response, body) {
        expect(response.statusCode).to.equal(404);
        done();
    });
  });

  it('Should return an id of a matching player', (done) => {
    request('http://localhost:3000/players/5/match' , (error, response, body) => {
      expect(body).to.equal('34');
      done();
    });
  });

  it('Should return an id of a matching player', (done) => {
    request('http://localhost:3000/players/22/match' , (error, response, body) => {
      expect(body).to.equal('25');
      done();
    });
  });

  it('Should return an id of a matching player', (done) => {
    request('http://localhost:3000/players/18/match' , (error, response, body) => {
      expect(body).to.equal('16');
      done();
    });
  });
});