//Task 1


let rawName = "   jOhN   doE   ";

let trimmed = rawName.trim();

let singleSpaced = trimmed.replace(/\s+/g, " ");

let normalizedName = singleSpaced
  .split(" ")
  .map(w => w ? w[0].toUpperCase() + w.slice(1).toLowerCase() : "")
  .join(" ");

let message = `Hello, ${normalizedName}!`;

console.log(message); // Hello, John Doe!

//Task 2

const s = "The quick brown fox jumps over the lazy dog.";

let quick_slice = s.slice(4, 9);           // "quick"
let brown_slice = s.slice(10, 15);         // "brown"
let dog_slice   = s.slice(-4);             // "dog."

let quick_sub = s.substring(4, 9);         // "quick"
let brown_sub = s.substring(10, 15);       // "brown"
let dog_sub   = s.substring(s.length - 4); // "dog."

console.log({ quick_slice, brown_slice, dog_slice, quick_sub, brown_sub, dog_sub });

//Task 3

let haystack = "Hello World";
let needle = "world";

// Нормалізація регістру обох рядків перед includes
let found = haystack.toLowerCase().includes(needle.toLowerCase());

console.log(found); // true

//Task 4

let raw = "   Title: value   ";

let t = raw.trim();           // "Title: value"

let idx = t.indexOf(":");     // 5

let beforeColon = idx === -1 ? t : t.slice(0, idx);

console.log({ t, idx, beforeColon });