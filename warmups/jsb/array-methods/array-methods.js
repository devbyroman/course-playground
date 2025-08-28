//Task 1
/*Arrow functions are useful for concise transformations in mass methods such as map/filter/reduce, when you need to compactly describe an operation on an element without its own this; example idea: convert an array of prices into an array with VAT or filter only even numbers as single-line expressions. includes returns a Boolean value indicating the presence of an element and works correctly with NaN, while indexOf returns the index of the first occurrence or -1 and is based on strict equality; includes is more convenient for “is it there?” checks, indexOf — when you need the position.*/

//Task 2
/*Arrows for transformations
When conciseness and readability are important in higher-order array methods: map for transformations, filter for selection, reduce for aggregations; arrows support implicit return for single-line expressions and chain well.

Example idea: “convert an array of sums in hryvnia to an array of sums with 20% VAT” or “leave only even numbers from a list of numbers” — each as a short expression in map or filter without additional code and without its own this.

includes vs indexOf
includes: returns true/false, uses SameValueZero comparison, so it also finds NaN; useful for simple “does it contain?” questions without further work with the index.

indexOf: returns the index of the first occurrence or -1, uses strict comparison; chosen when the position of the element is needed (for example, to cut off part of the array from this index).*/

//Task 3
/*map creates a new array by applying a transformation to each element, while filter returns a new array containing only those elements that satisfy a condition; slice/concat are useful when you need to build a new array without mutating the original one, preserving immutability and code predictability.

Map and Filter
map: designed for transformation — each element is passed through a function, resulting in a new array of the same length with transformed values.

filter: designed for selection — returns a new array with a subset of elements that satisfy the condition without changing the original.*/

//Task 4
/*When to use slice/concat
Use slice and concat when you need to get a part or concatenate arrays without changing the original: they return a new array, unlike mutating splice/push, which is important in immutability patterns (for example, in React/Redux or with pure functions).*/