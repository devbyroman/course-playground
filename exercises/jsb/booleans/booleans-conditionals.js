// Task 1
const isMember = true
const price = 50
const discount = isMember ? 10 : 0
const finalPrice = price - discount//40
console.log(finalPrice)

//Taks 2
let input = "   YeS  ";
let v = input.trim().toLowerCase();
let isYes = (v === "yes" || v === "y");
console.log({ v, isYes }); // { v: "yes", isYes: true }

//Task 3
const result = (typeof x === "number" && x && a <= x && x <= b) ? "valid" : "invalid"
const result1 = (typeof x === "number" && x && a < x && x < b) ? "valid" : "invalid"
console.log(result)


//Task 4
const isEmptyOrWhitespace = input.trim().length === 0
const isEmptyOrWhitespaceTF = !input || !input.replace(/\S/g, "").length && input.trim().length === 0
console.log(isEmptyOrWhitespace)
console.log(isEmptyOrWhitespaceTF)
