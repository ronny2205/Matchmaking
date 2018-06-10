'use strict';

const kuku = () => {
  return 67;
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
 exports.teamlist = kuku();  
//exports.teamlist = thelist();  
