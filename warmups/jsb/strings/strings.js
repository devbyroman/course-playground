//Task 1
console.log(Math.floor(3.6))//3
console.log(Math.ceil(3.6))//4

//Task 2
console.log(0.1 + 0.2.toFixed(2))//0.10.20

//Task 3 
const str = "JavaScript"
const name = "Alan"
console.log(str.length)
console.log(str.at(0))//J
console.log(str.at(-1))//t
console.log(str + name)

//Task 4
const str1 = "The quick brown fox jumps over the lazy dog.";

//"quick brown fox"
const a1 = str1.slice(4, 19);       // "quick brown fox"
const a2 = str1.substring(4, 19);   // "quick brown fox"

//"dog."
const b1 = str1.slice(-4);          // "dog."
const b2 = str1.substring(40);      // "dog."

console.log({ a1, a2, b1, b2 });