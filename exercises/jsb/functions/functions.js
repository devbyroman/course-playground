//Task 1
function add(a,b) {
    return a + b
}
add(3,3)

//Task 2
function toGreeting(name = "stranger") {
    return "Hello" + name
}

toGreeting("Alice")

//Task 3
const last = (arr) => {
    return arr[arr.lenght - 1]
}

last(1,2,3)

//Task 4
const item = {}

function setFlag(obj) {
    obj.flagged = true
}

setFlag(item)
console.log(item.flagged) //true