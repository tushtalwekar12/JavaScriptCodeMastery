// String
let myName = "Tushar Talwekar";
console.log("myName : "+ myName);

//  String methods: `length`, `slice`, `replace`, `includes`, `split`

// length - It is a property that return the length of the string 
console.log("Length of name: " + myName.length);

// slice(start, end) - The end index is not included  - It is used when we want particular word or string in a sentence .
console.log(myName.slice(0,6)); 

// replace -used to replace parts of a string with another string
console.log(myName.replace("T","S"));

// i want replace all the T with S
console.log(myName.replace(/T/g, "S"));
