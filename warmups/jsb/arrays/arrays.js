//Task 1
let input = "   YeS  ";
let v = input.trim().toLowerCase();
let isYes = (v === "yes" || v === "y");
console.log({ v, isYes }); // { v: "yes", isYes: true }

//Task 2
if ("0") {
  console.log('if("0") -> виконається'); 
} else {
  console.log('if("0") -> НЕ виконається');
}

if (0) {
  console.log("if(0) -> виконається");
} else {
  console.log("if(0) -> НЕ виконається");
}

console.log(!!"0"); // true
console.log(!!0);   // false

//Task 3
const arr = ["apple","banana", "phone"]
console.log(arr[0])//apple
console.log(arr[arr.length-1])//phone

//Task 4
const numArr = [1,2,3]
const addArr = numArr.concat(9)
const addArrSpread = [...numArr, 8]
console.log(addArr)// [1,2,3,9]
console.log(addArrSpread)// [1,2,3,8]