'use strict';

// Zadanie pierwsze
var hello = 'Hello';
var world = 'World';
console.log('Zadanie pierwsze');
console.log(hello + ' ' + world);

//Zadanie drugie
var multiply = function multiply(x) {
  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return x * y;
};
console.log('Zadanie drugie');
console.log(multiply(2));

//Zadane trzecie

var getAverage = function getAverage() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return args.reduce(function (total, arg) {
    return total + arg;
  }) / args.length;
};
// jak zrobic to z forEach
//const getAverage = (...args) => args.forEach((arg) => var total += arg) / args.length;
console.log('Zadanie trzecie');
console.log(getAverage(4));

//Zadanie czwarte

var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

console.log('Zadanie czwarte');
console.log(getAverage(grades));

//Zadanie piate

var data = [1, 4, 'Iwona', false, 'Nowak'];
var firstName = data[2],
    lastName = data[4];

console.log(firstName, lastName);
