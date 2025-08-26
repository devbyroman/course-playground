//Task 1
const num = 52
const str = "Ronaldo"
const bool = false

console.log(typeof num)
console.log(typeof str)
console.log(typeof bool)

//Task 2
console.log(2 + 3 * 4);      // 14: first 3*4=12, then 2+12 
console.log((2 + 3) * 4);    // 20: brackets change the order

//Task 3
console.log(5 == "5");   // true: "5" reduced to a number
console.log(5 === "5");  // false: different types
console.log("0" == false); // true: "0" -> 0, 0 == false

//Task 4
if ("0") { console.log("truthy"); } //true
if (0) {console.log("truthy")} //false
if (""){console.log("truthy")}//false
if(null){console.log("truthy")}//false
if(undefined){console.log("truthy")}//false
if(NaN){console.log("truthy")}//false