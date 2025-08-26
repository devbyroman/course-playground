//Task 1

const price = 5.0
const varRate = 2
console.log(price + price * varRate.toFixed(2))


//Task2
const A = 2.73;  // с
const B = 2.12;  // с

const A_floor = Math.floor(A); // 2
const B_floor = Math.floor(B); // 2

const A_ceil  = Math.ceil(A);  // 3
const B_ceil  = Math.ceil(B);  // 3

console.log({ A_floor, B_floor, A_ceil, B_ceil });

//Task 3
const nums = [1.2, 2.35, 3.05];
const avg = nums.reduce((s, x) => s + x, 0) / nums.length; // 2.2(6)...

const shown = avg.toFixed(1); // "2.3" 
const shownNum = Number(shown); // 2.3 

console.log({ avg, shown, shownNum });

//Task 4
const bad = Math.round(1.005 * 100) / 100; // 1.00

const good = Math.round((1.005 + Number.EPSILON) * 100) / 100; // 1.01

console.log({ bad, good });