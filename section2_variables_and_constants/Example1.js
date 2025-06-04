// let, const and var - keywords to declare variables in JavaScript

//1. let - Used to declare a variable that can change later.
let age = 22;
age = 25; // Reassigning a new value
console.log(age); // Output: 25

//2. const - Used to declare a constant variable that cannot be changed.
const pi =3.14;
 //pi = 3.14159; // TypeError: Assignment to constant variable.
console.log(pi); // This will throw an error because const cannot be reassigned


//3. var - Used to declare a variable that can be changed later, but has function scope or global scope not block scope.
var name = "John";
name = "Doe"; // Reassigning a new value
console.log(name); // Output: Doe
