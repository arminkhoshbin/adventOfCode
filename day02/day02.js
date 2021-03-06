'use strict';

var fs = require('fs');

var Total = function(input) {
	var totalWrap = 0;
	var totalRibbon = 0;
	for (var i = 0; i < input.length; i++) {
		var dimensions = input[i].split("x");
		for (var j = 0; j < dimensions.length; j++) {
			dimensions[j] = parseInt(dimensions[j]);
		}
		// JS doesn't have a out of a box function for sorting numerical elements?!
		dimensions = dimensions.sort(function(a, b) {return a-b} );
		totalWrap += (2 * (dimensions[0]*dimensions[1] + dimensions[0]*dimensions[2] + dimensions[1]*dimensions[2])) + (dimensions[0]*dimensions[1]);
		totalRibbon += (2 * (dimensions[0] + dimensions[1])) + (dimensions[0] * dimensions[1] * dimensions[2]);
		//console.log(dimensions);
	}
	return {'totalWrap': totalWrap, 'totalRibbon': totalRibbon};
}

fs.readFile('input.txt', function (err, data) {
  if (err) throw err;
  var input = data.toString();
  var array = input.split("\n");
  console.log('Total of ' + Total(array).totalWrap + ' square feet of wrapping paper is needed.');
  console.log('Total of ' + Total(array).totalRibbon + ' square feet of ribbon is needed.');
});