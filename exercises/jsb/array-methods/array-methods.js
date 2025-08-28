//Task 1
const names = ["Alice", "Bob", "Charlie"];
const lengths = names.map(n => n.length); // [5, 3, 7]

//Task 2
const nums = [1, 2, 3, 4];
const evens = nums.filter(n => n % 2 === 0); // [2, 4]

//Task 3
const users = [{id:1},{id:2}];
const u2 = users.find(u => u.id === 2); // {id:2} or undefined

//Task 4
const arr = [1,2,3];
const copy = arr.slice();      // copy
const with4 = arr.concat(4);   // [1,2,3,4], arr don't change
