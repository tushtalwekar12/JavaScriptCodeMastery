// Why Should Not Write Tradition Function
function addNumber(num1, num2)
{
    console.log(num1+num2);
    console.log(this);
}

addNumber();

function subtractNumber(num1, num2)
{
    console.log(num1-num2);
    console.log(this);
}

const mySubtraction = (num1, num2) =>{
    console.log(num1-num2);
    console.log(this);
}

mySubtraction(12,13);