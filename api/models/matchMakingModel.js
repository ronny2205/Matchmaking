'use strict';

const kuku = () => {
  return 67;
};

// Mock data - array of players, sorted by MMR
const players = () => {
  return [
    {
      'id': 18,
      'MMR': 2200,
      'experience': 123,
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
  ]
};

var thelist = function() {  
  var objJson = {
    "GroupName": "D",
    "count": 4,
    "teams": [{
      "country": "England"
    }, {
      "country": "France"
    }, {
      "country": "Sweden"
    }, {
      "country": "Ukraine"
    }]
  };
  return objJson;
};
// exports.teamlist = kuku();  
//exports.teamlist = thelist();  
exports.teamlist = players();  
