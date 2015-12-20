'use strict';

var fs = require('fs');

var HouseNumbers = function(input) {
	// Santa begins by delivering present to his current location.
	var moves = [[0, 0]];
	var start = [0, 0];
	for (var i = 0; i < input.length; i++) {
		// Move y + 1
		if(input[i] === '^') {
			start[1]++;
		}
		// Move y -1
		else if(input[i] === 'v') {
			start[1]--;
		}
		// Move x + 1
		else if(input[i] === '>') {
			start[0]++;
		}
		// Move x -1
		else if(input[i] === '<') {
			start[0]--;
		}

		if(isUniqueHouse(moves, start)) moves.push([start[0], start[1]]);

	}

	return moves.length;
}

// Check if it's a new house or returning.
var isUniqueHouse = function(list, move) {
	var isUnique = true;
	for (var i = 0; i < list.length; i++) {
		if(list[i][0] === move[0] && list[i][1] === move[1]) {
			isUnique = false;
			break;
		}
	}
	return isUnique;
}

fs.readFile('input.txt', function (err, data) {
  if (err) throw err;
  var input = data.toString();
  console.log(HouseNumbers(input) + ' houses receive at least one present.');
});