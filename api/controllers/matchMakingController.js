'use strict';
const matchMaking = require('../models/matchMakingModel');

exports.findPlayerMatch = (req, res) => {
  const playerId = parseInt(req.params.playerId);
  res.json(matchMaking.findMatch(playerId));
};