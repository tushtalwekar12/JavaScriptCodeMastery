// Array creation & access
let arr = [11,12,13,14];
console.log(arr);




// Array concat() -Join Three array 
let a =[1,2,3];
let b =[4,5];
let c = [6,7];
let d =a.concat(b,c);
console.log("Add 3 arrays : ",d);

let arr1 =[1,2];
let arr2 =[3,4];
console.log(arr1.concat(arr2));

// reduce()
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 15
