// Operators in JavaScript -  used to perform operations on values and variables

// 1. Airthmetic Operators - used to perform mathematical operations
let a =10;
let b = 5;
console.log("Airthmetic Operators:");
console.log("Addition : ", a+b); // Addition
console.log("Subtraction : ", a-b); // Subtraction
console.log("Multiplication : ", a*b); // Multiplication
console.log("Division : ", a/b); // Division
console.log("Modulus : ", a%b); // Modulus
console.log("Exponentiation : ", a**b); // Exponentiation
console.log("Increment : ", ++a); // Increment
console.log("Decrement : ", --b); // Decrement

// 2. Assignment Operators - used to assign values to variables 
let c = 20;
console.log("\nAssignment Operators:");
console.log("c = ", c); // Assignment
c += 5; // Add and assign
console.log("c after += 5 : ", c);

// remaining assignment operators - -= , *=, /=, %= 

// 3. Comparison Operators - used to compare two values and return a boolean value - ==, ===, !=, !==, >, <, >=, <=
let x = 10;
let y = 20;
let z = "10";
console.log("\nComparison Operators:");

// ✅ == (Loose Equality) - Compares values only, not data types.
console.log("x == y : ", x==z); // True
// ✅ === (Strict Equality) - Compares both value and data type.
console.log("x === y : ", x ===z); // false 


// ✅ != (Loose Inequality) - Compares values only, not data types.
console.log("x != y : ", x!=y); // True

// ✅ !== (Strict Inequality) - Compares both value and data type.
console.log("x !== z : ", x !==z ); // True

// ✅ > (Greater Than) - Checks if left value is greater than right value.
console.log("x > y : ", x > y); // False
// ✅ < (Less Than) - Checks if left value is less than right value.
console.log("x < y : ", x < y); // True
// ✅ >= (Greater Than or Equal To) - Checks if left value is greater than or equal to right value.
console.log("x >= y : ", x >= y); // False
// ✅ <= (Less Than or Equal To) - Checks if left value is less than or equal to right value.
console.log("x <= y : ", x <= y); // True

// 4. Logical Operators - used to combine multiple conditions - &&, ||, !
let p = true ;
let q = false;
console.log("\nLogical Operators:");
// ✅ && (Logical AND) - Returns true if both operands are true.
console.log("p && q : ", p && q); // False
// ✅ || (Logical OR) - Returns true if at least one operand is true.
console.log("p || q : ", p || q); // True
// ✅ ! (Logical NOT) - Reverses the boolean value.
console.log("!p : ", !p); // False

// 5. Bitwise Operators - used to perform operations on bits - &, |, ^, ~, <<, >>
let r = 5;  // 0101
let s = 3;  // 0011
console.log("\nBitwise Operators:");
// ✅ & (Bitwise AND) - Compares each bit of two numbers and returns a new number.
console.log("r & s : ", r & s); // 1 (0001)
// ✅ | (Bitwise OR) - Compares each bit of two numbers and returns a new number.
console.log("r | s : ", r | s); // 7 (0111)
// ✅ ^ (Bitwise XOR) - Compares each bit of two numbers and returns a new number.
console.log("r ^ s : ", r ^ s); // 6 (0110)
// ✅ ~ (Bitwise NOT) - Inverts the bits of a number.
console.log("~r : ", ~r); // -6 (in binary: 1010)
// ✅ << (Left Shift) - Shifts bits to the left, filling with zeros.
console.log("r << 1 : ", r << 1); // 10 (1010)
// ✅ >> (Right Shift) - Shifts bits to the right.
console.log("r >> 1 : ", r >> 1); // 2 (0010)

// 6. Ternary Operator - a shorthand for if-else statements
let age = 18; 
console.log("\nTernary Operator:");
// ✅ ? : (Ternary Operator) - Returns one of two values based on a condition.
let canVote = (age >= 18)? "yes You can vote" : "no you can't vote yet";
console.log("Can vote : ", canVote);

