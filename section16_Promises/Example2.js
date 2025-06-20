
// Function and Parameters
function addNumber(x,y)
{
    return x+y;
}


let result = addNumber(12,13);
console.log(result);

// What is callback
// Passing A function as parameter to another
// to another function is known as callback.

function resolve(sucess)
{
    console.log("Resolve Method Called");
    sucess();
}

function mySuccess()
{
    console.log("Success");
}


resolve(mySuccess);