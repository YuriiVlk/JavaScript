/*let a = 5;
let b = 6.5;

 console.log(typeof a);
 console.log(typeof b);

 a = 'string';
 console.log(typeof a);
let isAdmin = false;
console.log(typeof isAdmin);
let c;
console.log(typeof c);
let d = null;
console.log(typeof (d == null));
*/
const payRateUsd = 80;
const projectHours = 40;
const availableHours = (11 - 2) * 5;
console.log('Can I work?  ' + (availableHours > projectHours));
console.log('Cost of work: ' + payRateUsd * projectHours + ' $');
const tamplate = `Can I work? ${availableHours > projectHours}`;
console.log(tamplate);

const age = '18';
console.log(Number(age) + 5);
console.log(age - 3);
const userName = 'User';
console.log(Number(userName) + 5);
console.log(typeof NaN);
console.log(String(2) + 5);
console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean(-1));
console.log(Boolean(''));
console.log(Boolean('123'));
console.log(Boolean(null));
console.log(Boolean(Number('string')));
console.log(Boolean(NaN));

