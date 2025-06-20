// Callback Example From W3Schools

function displayDataOnTerminal(data)
{
    console.log(data);
}

function myAdditionCalculator(num1, num2, myFunction)
{
    let result = num1 + num2;
    myFunction(result);
}

myAdditionCalculator(12,13,displayDataOnTerminal);