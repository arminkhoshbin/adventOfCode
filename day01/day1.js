'use strict';

var fs = require('fs');

var WhatFloor = function(input) {
	// Base floor as starting point
	var floor = 0;
	for (var i=0; i < input.length; i++) {
		if (input[i] === '(') floor++;
		else if (input[i] === ')') floor--;
	}
	return floor;
}

fs.readFile('input.txt', function (err, data) {
  if (err) throw err;
  var input = data.toString();
  console.log('Santa is on floor ' + WhatFloor(input));
});