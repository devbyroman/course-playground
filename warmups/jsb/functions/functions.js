//Task 1
/*Syntax: const role = user[“user-role”]. Square brackets allow you to use any string as a property name, including hyphens, spaces, or numbers at the beginning, and also work with dynamic keys from variables.

Why not use a dot: user.user-role will be interpreted as (user.user) - role, i.e. as subtraction, because a hyphen is an operator; dot notation requires a valid identifier without hyphens/spaces.

Translated with DeepL.com (free version)*/

//Task 2

/*First element: const first = nums; This is simply reading from index zero; the array is not mutated.

Last element: const last = nums[nums.length - 1]; We use length − 1 because length is the number of elements, and the largest index is one less (for example, for 3 elements, the indexes are 0,1,2).

Alternatively, without mutation, you can get the last element as nums.at(-1) or nums.slice(-1), but the basic and universal approach is through length − 1.*/

//Task 3

/*Functions are needed for code reuse, logic isolation, and value return: a single logically complete operation is formalized as a separate block that can be called multiple times with different arguments to obtain a result. Example task: validating and normalizing a username before saving it to a database or formatting a price with currency is logic that should be moved to a function so that it can be called in many places in the application.*/

//Task 4

/*function declaration: declared on a separate line at the block level and hoisted (accessible before the point of declaration), convenient for “globally” used utilities and when readability at the top of the file is important.

function expression: a function assigned to a variable; not hoisted as callable (only variable declaration), convenient for creating local utilities or passing as a value.

arrow function: abbreviated syntax for concise callbacks and single-line expressions; does not have its own this/arguments and is often used for short calculations or higher-order functions; for a single-line body, you can omit return and parentheses, writing it in the shortest form.*/

