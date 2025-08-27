//Task 1
let raw = "   aLiCe   joHnSon   ";
let trimmed = raw.trim(); //
let single = trimmed.replace(/\s+/g, " ");

let capitalized = single
  .toLowerCase()
  .replace(/\b\w/g, ch => ch.toUpperCase()); // [7][4]

// 4) Скласти повідомлення
let msg = `Hello, ${capitalized}!`;
console.log(msg); // Hello, Alice Johnson!

//Task 2
const phrase = "The quick brown fox jumps over the lazy dog.";
const firstSpace = phrase.indexOf(" ");             // after "The"
const secondSpace = phrase.indexOf(" ", firstSpace + 1); // after "quick"
const thirdSpace = phrase.indexOf(" ", secondSpace + 1); // after "brown"
const middleSlice = phrase.slice(secondSpace + 1, thirdSpace); // "brown"
const middleSub = phrase.substring(secondSpace + 1, thirdSpace); // "brown"
console.log({ middleSlice, middleSub });

//Task 3

let x = 10;
let a = 5;
let b = 15;

let inRangeInclusive = (a <= x) && (x <= b);

let inRangeExclusive = (a < x) && (x < b);

console.log({ inRangeInclusive, inRangeExclusive }); // { true, true }

//Task 4

let v1 = "";
let v2 = "0";
let v3 = 0;
let v4 = null;
let v5 = undefined;
let v6 = NaN;

let b1 = !!v1; // false
let b2 = !!v2; // true
let b3 = !!v3; // false
let b4 = !!v4; // false
let b5 = !!v5; // false
let b6 = !!v6; // false