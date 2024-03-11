This is for practicing code for review and so I have notes on where to get better.

MY Notes:
DIFF BETWEEN VARS, LET AND CONST
var:  *The scope of a var variable is functional or global scope.. 
        *It can be updated and re-declared in the same scope
        *It can be declared without initialization.
        *It can be accessed without initialization as its default value is “undefined”.
        *These variables are hoisted.

let: *The scope of a let variable is block scope.
        *It can be updated but cannot be re-declared in the same scope.
        *It can be declared without initialization.
        *It cannot be accessed without initialization otherwise it will give ‘referenceError’.
        *These variables are hoisted but stay in the temporal dead zone untill the initialization.

const: *The scope of a const variable is block scope.
        *It can neither be updated or re-declared in any scope.
        *It cannot be declared without initialization.
        *It cannot be accessed without initialization, as it cannot be declared without initialization.
        *These variables are hoisted but stays in the temporal dead zone until the initialization.

        https://www.geeksforgeeks.org/difference-between-var-let-and-const-keywords-in-javascript/

