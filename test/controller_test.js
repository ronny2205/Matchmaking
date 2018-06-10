const expect  = require('chai').expect;
const request = require('request');

describe('GET - match path', () => {
  it('Should return an id of a matching player', (done) => {
    request('http://localhost:3000/players/5/match' , (error, response, body) => {
      expect(body).to.equal('8');
      done();
    });
  });
});