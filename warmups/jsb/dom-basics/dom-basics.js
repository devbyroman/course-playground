//Task 1
/*includes returns a Boolean answer “yes/no” and is convenient for UI checks, while indexOf returns a position or −1 and is useful when you need the index for further actions; includes also finds NaN thanks to SameValueZero, which indexOf does not do.

Includes vs indexOf in UI
For simple checks for the presence of an element/string (activate a button, show a tooltip, validate input), it is more convenient to use includes because it directly returns true/false and does not require checking for −1; in addition, includes correctly handles NaN in arrays.

When you need to know the position to highlight a match, scroll to an element, cut part of a string, or add after the found location, indexOf is appropriate because it returns the index of the first occurrence or −1 if absent.*/

//Task 2
/*Why normalize strings
Normalization via trim + toLowerCase unifies input: it removes random spaces at the edges and aligns the case so that comparisons are consistent regardless of how the user entered the value (e.g., “ Yes ” → “yes”). This improves the accuracy of checks and searches in the UI, avoiding false mismatches due to case and spaces.

Example scenario: searching by input in a list of cities — before comparing with list items, the input value and items are converted to lowercase and spaces are trimmed so that “KYIV” matches “kyiv” in the data and does not create duplicates or omissions.*/

//Task 3
/*Elements are found by id using getElementById(“id”) and by CSS selector using querySelector(“selector”); querySelector is more convenient when there is no id or more flexible selectors are needed (classes, attributes, nesting), while getElementById is the simplest and most straightforward for a unique id.

Searching for elements
By id: the method returns an element with the corresponding unique id attribute, or null if not found; suitable for quick access to a specific node with a unique identifier.

By CSS selector: the method returns the first element that matches any valid CSS selector (classes, attributes, pseudo-classes, combinations), useful for complex or missing ids; querySelectorAll is used for multiple selections.*/

//Task 4
/*When querySelector is more convenient
When you need to select by class, attribute, or compound structure (for example, ‘form.login input[name=“email”]’), or when the element does not have an id; this method is more versatile, although slightly more general in semantics.

Adding a new <li> to <ul>
Create an element: create a new list node by creating an li in the document.

Set text: set the content of the new element via textContent for safe text without HTML.

Add a class: assign a class for styles via classList.add(“class-name”).

Insert at the end of the list: add li as the last child of the desired ul using the appendChild method so that it appears in the DOM.*/