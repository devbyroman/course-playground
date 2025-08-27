//Task 1

/*Take the initial array users = [“Alice”, ‘Bob’, “Charlie”]. Work with this array without mutation, forming a new array of results.

For each string, apply the following methods:

trim() — trim spaces from the beginning and end, return a new string, do not change the original.

toLowerCase() — convert the entire string to lowercase, also returns a new string, does not change the original.

Write the cleaned and lowercase values to a new array in the desired order; do not change users in place.

Translated with DeepL.com (free version)*/

//Task 2

/*Let ids be an array of identifiers. The first element is accessible at index 0: firstId = ids, since indexing in arrays starts at zero.

The last element is accessible at index length − 1: lastId = ids[ids.length - 1]. length − 1 is used because length returns the number of elements, and the largest index is always one less than the number (for example, for an array with 3 elements, the indexes are 0,1,2).

This access does not mutate the array: reading by index only retrieves the value; alternatively, at(-1) can be used to read the last element, but the basic approach with length − 1 is universal and transparent.

Translated with DeepL.com (free version)*/

//Task 3

const profile = {
    name: "Alice", 
    age: 25, 
    isStudent: true
}
console.log(profile.name);       // "Alice"
console.log(profile["age"]);     // 25
const key = "isStudent";
console.log(profile[key]);       // true 

//Task 4
profile.age = 30

console.log(profile)// { name: 'Alice', age: 30, isStudent: true }