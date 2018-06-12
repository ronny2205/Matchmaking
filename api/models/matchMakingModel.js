'use strict';

// Assumption that could be changed based on the gaming platform
const REASONABLE_EXPERIENCE_DIFFERENCE = 10;
const REASONABLE_MMR_DIFFERENCE = 200;

const find_available_player_with_closest_mmr = (allPlayers, currentPlayer, currentPlayerIndex) => {
  console.log(allPlayers);
  let prevIndex = currentPlayerIndex - 1;
  let nextIndex = currentPlayerIndex + 1;
  let matchFound = false;

  while (!matchFound) {
    let potentialPlayer;
    let potentialPlayerIndex; 
//console.log(players[prevIndex].available);

    // Find the next potential player
    if (nextIndex >= allPlayers.length){
      potentialPlayerIndex = prevIndex;
      prevIndex--;
    } else if (prevIndex < 0) {
      potentialPlayerIndex = nextIndex;
      nextIndex++;
    } else if (Math.abs(allPlayers[prevIndex].MMR - currentPlayer.MMR) < Math.abs(allPlayers[nextIndex].MMR - currentPlayer.MMR)) {
      potentialPlayerIndex = prevIndex;
      prevIndex--;
    } else {
      potentialPlayerIndex = nextIndex;
      nextIndex++;
    }
    //console.log(potentialPlayerIndex);
    potentialPlayer = allPlayers[potentialPlayerIndex];

    if (potentialPlayer.available) {
      return potentialPlayer.id;
    }

  }
}


/**
 * Finds the player with closest experience difference within reasonable mmr difference
 *
 * @param array  potentialPlayers Array of players with reasonable mmr difference
 * @param object currentPlayer    Current player details
 *
 * return int    id The id of the player with closest experience difference within reasonable mmr difference
 */
const find_player_with_closest_experience_difference_within_reasonable_mmr = (potentialPlayers, currentPlayer, currentPlayerIndex) => {
    // If no player is in the reasonable MMR difference, find the player with closest MMR that is availble 
  // write a function for that + model test
  if (potentialPlayers.length === 0) {
    return find_available_player_with_closest_mmr(players, currentPlayer, currentPlayerIndex);
  }
  // Remove players that are not in the reasonable MMR difference
  potentialPlayers = potentialPlayers.filter(player => Math.abs(player.MMR - currentPlayer.MMR) <= REASONABLE_MMR_DIFFERENCE);
  //potentialPlayers1 = potentialPlayers.filter(player => player.MMR > 2000);

  const player = potentialPlayers.reduce((prev, curr) => Math.abs(curr.experience - currentPlayer.experience) < Math.abs(prev.experience - currentPlayer.experience) ? curr : prev);
  return player.id;
}


/**
 * Find a match for a player - a player with the closest MMR and reasonable experience difference
 * The MMR difference should not exceed a reasonable difference
 *
 * @param playerId - the player to find a match for
 *
 * return matchingPlayerId - the id of the matched player
 */
const findMatch = (playerId) => {

  const currentPlayer = players.find((player) => { 
    return player.id === playerId; 
  });

  const currentPlayerIndex = players.findIndex(player => player.id === playerId);

  // console.log(currentPlayer);
  // console.log(currentPlayerIndex);

  // If no player is in the reasonable MMR difference, find the player with closest MMR that is availble 
  // write a function for that + model test

  let prevIndex = currentPlayerIndex - 1;
  let nextIndex = currentPlayerIndex + 1;
  let matchFound = false;
  const potentialPlayers = [];

  // Find the player with the closest MMR and reasonable experience difference
  while (!matchFound) {
    let potentialPlayer;
    let potentialPlayerIndex; 
//console.log(players[prevIndex].available);

    // Find the next potential player
    if (nextIndex >= players.length){
      potentialPlayerIndex = prevIndex;
      prevIndex--;
    } else if (prevIndex < 0) {
      potentialPlayerIndex = nextIndex;
      nextIndex++;
    } else if (Math.abs(players[prevIndex].MMR - currentPlayer.MMR) < Math.abs(players[nextIndex].MMR - currentPlayer.MMR)) {
      potentialPlayerIndex = prevIndex;
      prevIndex--;
    } else {
      potentialPlayerIndex = nextIndex;
      nextIndex++;
    }
    //console.log(potentialPlayerIndex);
    potentialPlayer = players[potentialPlayerIndex];
//console.log(potentialPlayer);
    if (potentialPlayer.available && Math.abs(potentialPlayer.MMR - currentPlayer.MMR) <= REASONABLE_MMR_DIFFERENCE) {
      potentialPlayers.push(potentialPlayer);
      if (Math.abs(potentialPlayer.experience - currentPlayer.experience) <= REASONABLE_EXPERIENCE_DIFFERENCE) {
        return potentialPlayer.id;
      }
    } 
    if (Math.abs(potentialPlayer.MMR - currentPlayer.MMR) > REASONABLE_MMR_DIFFERENCE) {
      console.log(potentialPlayers);
      return find_player_with_closest_experience_difference_within_reasonable_mmr(potentialPlayers, currentPlayer, currentPlayerIndex);
    }
//console.log(Math.abs(potentialPlayer.experience - currentPlayer.experience));
// console.log(potentialPlayer);
    // if (potentialPlayer.available && Math.abs(potentialPlayer.experience - currentPlayer.experience) < REASONABLE_EXPERIENCE_DIFFERENCE) {
    //   return potentialPlayer.id;
    // }

     //console.log(potentialPlayer);

    //matchFound = true;
   }


  //console.log(players[0]);
  //console.log(players.length);

  // Array of all players besides the one that is looking for a match
  // const otherPlayers = players.filter(function(el) {
  //   return el.id !== playerId;
  // });
  // console.log(players.length);
  // console.log(otherPlayers.length);

  // Find players with close MMR
  // let closeMmrPlayers = [];
  // const midPlayerIndex = Math.round(players.length / 2);
  // console.log(midPlayerIndex);

  // Find the player with the closethest MMR
  // let index = midPlayerIndex;
  // let closeMmrFound = false;
  // while (!closeMmrFound) {
  //   let potentialPlayer = players[index];
  //   console.log(Math.abs(potentialPlayer.MMR - currentPlayer.MMR));
  //   closeMmrFound = true;
  // }

  // const result = closestPlayerMmr(players, currentPlayer);


  // const closestPlayer = result.player;
  // const playerIndex = result.index;

  //   console.log(closestPlayer);
  //   console.log(playerIndex);


  return potentialPlayerIndex; // ???
};


// Mock data - array of players, sorted by MMR
// const players = () => { 
 // return [
const players = [
    {
      'id': 18,
      'MMR': 2200,
      'experience': 36,
      'available': true
    },
    {
      'id': 1,
      'MMR': 2300,
      'experience': 67,
      'available': true
    },
    {
      'id': 16,
      'MMR': 2300,
      'experience': 60,
      'available': true
    },
    {
      'id': 17,
      'MMR': 2300,
      'experience': 37,
      'available': false
    },
    {
      'id': 19,
      'MMR': 2350,
      'experience': 61,
      'available': false
    },
    {
      'id': 3,
      'MMR': 2500,
      'experience': 12,
      'available': true
    },
    {
      'id': 9,
      'MMR': 2500,
      'experience': 28,
      'available': true
    },
    {
      'id': 23,
      'MMR': 2580,
      'experience': 76,
      'available': false
    },
    {
      'id': 6,
      'MMR': 2600,
      'experience': 78,
      'available': false
    },
    {
      'id': 20,
      'MMR': 2710,
      'experience': 99,
      'available': false
    },
    {
      'id': 21,
      'MMR': 2870,
      'experience': 12,
      'available': true
    },
    {
      'id': 22,
      'MMR': 2900,
      'experience': 48,
      'available': true
    },
    {
      'id': 10,
      'MMR': 3000,
      'experience': 20,
      'available': true
    },
    {
      'id': 4,
      'MMR': 3000,
      'experience': 10,
      'available': true
    },
    {
      'id': 24,
      'MMR': 3000,
      'experience': 77,
      'available': true
    },
    {
      'id': 25,
      'MMR': 3080,
      'experience': 45,
      'available': true
    },
    {
      'id': 8,
      'MMR': 3100,
      'experience': 50,
      'available': true
    },
    {
      'id': 26,
      'MMR': 3220,
      'experience': 52,
      'available': true
    },
    {
      'id': 27,
      'MMR': 3300,
      'experience': 49,
      'available': false
    },
    {
      'id': 28,
      'MMR': 3390,
      'experience': 87,
      'available': true
    },
    {
      'id': 29,
      'MMR': 3400,
      'experience': 145,
      'available': true
    },
    {
      'id': 15,
      'MMR': 3500,
      'experience': 22,
      'available': true
    },
    {
      'id': 5,
      'MMR': 4500,
      'experience': 69,
      'available': true
    },
    {
      'id': 30,
      'MMR': 4500,
      'experience': 120,
      'available': true
    },
    {
      'id': 31,
      'MMR': 4540,
      'experience': 234,
      'available': true
    },
    {
      'id': 14,
      'MMR': 4600,
      'experience': 4,
      'available': true
    },
    {
      'id': 32,
      'MMR': 4600,
      'experience': 99,
      'available': true
    },
    {
      'id': 33,
      'MMR': 4690,
      'experience': 23,
      'available': false
    },
    {
      'id': 34,
      'MMR': 4700,
      'experience': 77,
      'available': true
    },
    {
      'id': 35,
      'MMR': 4800,
      'experience': 71,
      'available': true
    },
    {
      'id': 36,
      'MMR': 4830,
      'experience': 29,
      'available': true
    },
    {
      'id': 37,
      'MMR': 4900,
      'experience': 234,
      'available': true
    },
    {
      'id': 38,
      'MMR': 4980,
      'experience': 55,
      'available': false
    },
    {
      'id': 2,
      'MMR': 5000,
      'experience': 60,
      'available': false
    },
    {
      'id': 11,
      'MMR': 5000,
      'experience': 43,
      'available': false
    },
    {
      'id': 39,
      'MMR': 5100,
      'experience': 44,
      'available': true
    },
    {
      'id': 40,
      'MMR': 5100,
      'experience': 22,
      'available': true
    },
    {
      'id': 41,
      'MMR': 5150,
      'experience': 34,
      'available': true
    },
    {
      'id': 12,
      'MMR': 5200,
      'experience': 99,
      'available': true
    },
    {
      'id': 42,
      'MMR': 5300,
      'experience': 66,
      'available': true
    },
    {
      'id': 43,
      'MMR': 5440,
      'experience': 69,
      'available': true
    },
    {
      'id': 44,
      'MMR': 5440,
      'experience': 22,
      'available': true
    },
    {
      'id': 45,
      'MMR': 5500,
      'experience': 89,
      'available': true
    },
    {
      'id': 46,
      'MMR': 5500,
      'experience': 19,
      'available': true
    },
    {
      'id': 47,
      'MMR': 5600,
      'experience': 44,
      'available': true
    },
    {
      'id': 7,
      'MMR': 5700,
      'experience': 200,
      'available': true
    },
    {
      'id': 13,
      'MMR': 5800,
      'experience': 177,
      'available': true
    },
    {
      'id': 48,
      'MMR': 5800,
      'experience': 12,
      'available': true
    },
    {
      'id': 49,
      'MMR': 5880,
      'experience': 122,
      'available': true
    },
    {
      'id': 50,
      'MMR': 6700,
      'experience': 456,
      'available': false
    }
  ];

module.exports = {
  find_available_player_with_closest_mmr,
  find_player_with_closest_experience_difference_within_reasonable_mmr,
  findMatch
};
