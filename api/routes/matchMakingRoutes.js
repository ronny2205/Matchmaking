'use strict';
module.exports = function(app) {
  const matchMaking = require('../controllers/matchMakingController');

  app.route('/players/:playerId/match')
    .get(matchMaking.findPlayerMatch);
};