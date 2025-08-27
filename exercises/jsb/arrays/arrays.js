//Task 1
const strArr = ["Alice", "John", "Melanie"]
const addArr = strArr.concat("Alex")
const addArrSpread = [...strArr, "Piter"]
console.log(addArr)// ["Alice", "John", "Melanie","Alex"]
console.log(addArrSpread)// ["Alice", "John", "Melanie","Piter"]

//Task 2
const productIds = [1,2,3,4]
const firstId = productIds[0] //1
const lastId = productIds[productIds.length-1]//4
console.log(firstId)
console.log(lastId)

//Task 3
const tags = ["js", "web", "node", "web"]
console.log(tags.includes("web")); // true
console.log(tags.indexOf("web")); //1

//Task 4
const rimmed = [" Alice ", " Bob", "Charlie "]
const a = rimmed[0].trim()
const b = rimmed[1].trim()
const c = rimmed[2].trim()

const normalized = [a, b, c]
console.log(normalized)// ["Alice", "Bob", "Charlie"]