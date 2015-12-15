'use strict';

var fs = require('fs');

var WhatFloor = function(input) {
	// Starting point
	var floor = 0;
	for (var i=0; i < input.length; i++) {
		// Count floors
		if (input[i] === '(') floor++;
		else if (input[i] === ')') floor--;
	}
	return floor;
}

var WhatPosition = function(input) {
	// Starting point
	var floor = 0,
	position;
	for (var i=0; i < input.length; i++) {
		if (floor === -1) {
			position = i;
			// Stop counting floors on first occurance
			break;
		}
		// Count floors
		if (input[i] === '(') floor++;
		else if (input[i] === ')') floor--;
	}
	return position;
}

fs.readFile('input.txt', function (err, data) {
  if (err) throw err;
  var input = data.toString();
  console.log('Santa is on floor ' + WhatFloor(input));
  console.log('Santa enters basement for the first time at position ' + WhatPosition(input));
});