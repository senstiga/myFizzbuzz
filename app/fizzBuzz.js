'use strict'
var file = {}
file.fizzBuzz = function (number){
	if (number % 15 == 0){
		return "fizzbuzz";
	}else if(number % 5 == 0) {
		return "Buzz";
	}else if(number % 3 == 0){
		return "fizz";
	}else{
		return number;
	}

}
 module.exports = file;
