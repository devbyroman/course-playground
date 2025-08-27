//Task 1
const product = {
    id: 1,
    title: "Samsung S25",
    price: 1000,
}
product.currency = "USD"
console.log(product)// { id: 1, title: 'Samsung S25', price: 1000, currency: 'USD' }

//Task 2
const config = {
  "api-base": "https://api.example.com",
  timeout: 5000
};

const baseUrl = config["api-base"]; // ok
// const bad = config.api-base;     // error
console.log(baseUrl); // "https://api.example.com"


//Task 3
const user = {
    contacts: {
       email: "gorila@gorila.com", 
       phone: "123456789"  
    }
}

const user2 = {
    ...user,
    contacts: {
        ...user.contacts,
        email: "new@email.com"
    }
};

console.log(user.contacts.email);  // "old@mail.com"
console.log(user2.contacts.email); // "new@mail.com"

//Task 4
const flags = {
    debug: false
}

console.log("debug" in flags);          // true
console.log(flags.hasOwnProperty("x"));// false
console.log(Object.hasOwn(flags, "x"));// false

console.log("verbose" in flags);          // false
console.log(flags.hasOwnProperty("x"));// false
console.log(Object.hasOwn(flags, "x"));// false