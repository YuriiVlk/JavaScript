/*const money = 10;
const canBuy = money > 50;

if(canBuy) {
	console.log('Can buy our product');
} else if(money > 5) {
    console.log('Buy mini product');
}  else {
	console.log('No balance');
}

console.log('Sum');
*/

const sumDeposit = 12000;
const costOfHouse = 13500;
const rate = 0.07;
const sumProcent = sumDeposit * (1 + rate / 12) ** 24;
console.log(sumProcent);

if (sumProcent > costOfHouse) {
	console.log(`Can buy house. Balance of funds: ${sumProcent - costOfHouse}`)
} else {
	console.log('Can not buy');
}

