var assert = require('assert');
const matchMaking = require('../api/models/matchMakingModel');

describe('Matchmaking model', () => {

  it('should return player not found', () => {
    assert.equal(matchMaking.findMatch(88), 'Player not found');
  });

  it('should return the matched player id', () => {
    assert.equal(matchMaking.findMatch(5), 34);
  });

  it('should find the player with closest experience difference within reasonable mmr difference', () => {
    currentPlayer = { id: 12, MMR: 2000, experience: 77, available: true };
    potentialPlayers = [
      { id: 11, MMR: 2100, experience: 90, available: true },
      { id: 45, MMR: 2150, experience: 200, available: true },
      { id: 23, MMR: 2200, experience: 23, available: true },
      { id: 33, MMR: 1900, experience: 44, available: true },
      { id: 1, MMR: 1800, experience: 91, available: true },
      { id: 17, MMR: 1700, experience: 88, available: true }
    ];

    assert.equal(matchMaking.find_player_with_closest_experience_difference_within_reasonable_mmr(potentialPlayers, currentPlayer), 11);
  });

  it('should find available player with closest mmr ', () => {
    currentPlayer = { id: 33, MMR: 2700, experience: 44, available: true };
    allPlayers = [
      { id: 11, MMR: 2100, experience: 90, available: true },
      { id: 45, MMR: 2150, experience: 200, available: true },
      { id: 23, MMR: 2200, experience: 23, available: true },
      { id: 33, MMR: 2700, experience: 44, available: true },
      { id: 12, MMR: 2950, experience: 77, available: false },
      { id: 1, MMR: 2960, experience: 91, available: true },
      { id: 17, MMR: 3000, experience: 88, available: true }
    ];
    assert.equal(matchMaking.find_available_player_with_closest_mmr(allPlayers, currentPlayer, 3), 1);
  });
});