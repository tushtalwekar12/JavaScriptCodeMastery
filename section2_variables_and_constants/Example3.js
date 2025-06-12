// Reference Data Types: objects, arrays

//1. objects - A collection of key-value pairs, where keys are strings and values can be any data type.
let person = {
    name : "tushar",
    age : 23,
    isStudent : true,
    address : {  // nested object
        city : "Nagpur",
        state : "Maharashtra",
        country : "India",
        zipCode : 440036
    }
};
console.log("person object : ", person);
console.log("name : ", person.name);


// example on object
let Accenture_Employee ={
    Emp_name : "Tushar Talwekar",
    Emp_id : 12345,
    Emp_Designation : "Software Developer",
    Emp_Salary : 80000,
    Emp_Address : {
        city : "Nagpur",
        State: "maharashtra",
        country : "India"
    }
};
console.log("Accenture Employee : ", Accenture_Employee);
console.log("Accenture Employee Address : ", Accenture_Employee.Emp_Address.city);


//2. arrays - An ordered collection of values, which can be of any data type.
let fruits = ["apple", "banana", "cherry", 42, true, { type: "citrus" }]; // mixed data types
console.log("fruits array : ", fruits);
console.log("first fruit : ", fruits[0]); 

// Accessing elements in an array
console.log("second fruit : ", fruits[1]);
console.log("third fruit : ", fruits[2]); 
console.log("fourth fruit : ", fruits[3]); 
console.log("fifth fruit : ", fruits[4]); 
console.log("sixth fruit : ", fruits[5]); // Accessing the sixth element (object)
// Accessing properties of an object within an array
console.log("type of sixth fruit : ", fruits[5].type); // Accessing the 'type' property of the object in the array


// Example of an array of objects
let cars_collection =[
    { brand : "Suv", model : "XUV700", year : 2021, price: 2500000 },
     { brand : "Maruti", model : "XUV700", year : 2021, price: 2500000 },
      { brand : "Suv", model : "XUV700", year : 2021, price: 2500000 }
];
console.log("cars Collection : ", cars_collection[1]); 
// Explain :  Accessing properties of an object within an array
console.log("brand of second car : ", cars_collection[1].brand); // Accessing the 'brand' property of the second car object