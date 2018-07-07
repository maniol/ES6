// Zadanie pierwsze
const hello='Hello';
const world='World';
console.log(`Zadanie pierwsze`);
console.log(`${hello} ${world}`);

//Zadanie drugie
const multiply = (x,y = 1) => x * y;
console.log(`Zadanie drugie`);
console.log(multiply(2));

//Zadane trzecie

const getAverage = (...args) => args.reduce((total, arg) => total + arg) / args.length;
// jak zrobic to z forEach
//const getAverage = (...args) => args.forEach((arg) => var total += arg) / args.length;
console.log(`Zadanie trzecie`);
console.log(getAverage(4));

//Zadanie czwarte

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

console.log('Zadanie czwarte');
console.log(getAverage(...grades));

//Zadanie piate

const data = [1, 4, 'Iwona', false, 'Nowak']
const [ , , firstName, , lastName] = data
console.log(firstName, lastName)