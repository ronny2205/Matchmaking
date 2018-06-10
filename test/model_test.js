var assert = require('assert');
const matchMaking = require('../api/models/matchMakingModel');

describe('Matchmaking model', function() {
  // describe('#indexOf()', function() {
  //   it('should return -1 when the value is not present', function() {
  //     // assert.equal([1,2,3].indexOf(4), -1);
  //     assert.equal(matchMaking.findMatch(5), 33);
  //   });
  // });

  it('should return the matched player id', function() {
      assert.equal(matchMaking.findMatch(5), 34);
  });
});