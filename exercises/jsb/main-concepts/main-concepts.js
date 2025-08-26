//Task 1
const num = 4
const str = "qwe"
console.log(`${num}${str}`)//4qwe

//Task 2
const a = 12 
const b = 44
const c = 123
console.log(a + b * c)//5424
console.log((a + b) * c)//6888

//Task 3
if("" === 0){console.log("false")}
if("false" === 0){console.log("false")}
if(0===0){console.log("true")}
if(1 === 0){console.log("false")}
if(null === 0){console.log("false")}
if(undefined === 0){console.log("false")}
if(NaN === 0){console.log("false")}
if("0" === 0){console.log("false")}

//Task 4
console.log(1 + "2")//"12" concatenation, number converted to string
console.log(Number(1) + Number("2"))//3
console.log("0" === false)//true both are reduced to the number 0
console.log(Number("0" === Number(false)))//true