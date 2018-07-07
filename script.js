// Zadanie pierwsze
const hello='Hello';
const world='World';
console.log(`Zadanie pierwsze`);
console.log(`${hello} ${world}`);

//Zadanie drugie
const multiply = (x,y = 1) => {return x * y}
console.log(`Zadanie drugie`);
console.log(multiply(2));

//Zadane trzecie

const getAverage = (...args) => args.reduce((total, arg) => total + arg) / args.length;
// jak zrobic to z forEach
//const getAverage = (...args) => args.forEach((arg) => var total += arg) / args.length;
console.log(`Zadanie trzecie`);
console.log(getAverage(4));

//Zadanie piate

const data = [1, 4, 'Iwona', false, 'Nowak']
const [ , , firstName, , lastName] = data
console.log(firstName, lastName)