'use strict';

var fs = require('fs');

var What = function(input) {
	// Starting point
	var floor = 0,
	position = 0;
	for (var i = 0; i < input.length; i++) {
		// first basement occurance
		if (floor === -1 && position === 0) position = i;
		// Count floors
		if (input[i] === '(') floor++;
		else if (input[i] === ')') floor--;
	}
	return {'floor': floor, 'position': position};
}

fs.readFile('input.txt', function (err, data) {
  if (err) throw err;
  var input = data.toString();
  console.log('Santa is on floor ' + What(input).floor);
  console.log('Santa enters basement for the first time at position ' + What(input).position);
});