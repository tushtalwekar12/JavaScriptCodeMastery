let numbers =  [4, 1, -20, -7, 5, 9, -6];

// 4 >= 0 --> Positive --> true --> ans;
// 1 >= 0 --> Positive --> ans;
// -20 >= 0 --> Negative --> false -->do not add to anser;
// -7 >= 0 --> do not add to answer;
// 5 >= 0  --> Positive --> ans;
// 9 >= 0  --> Positive --> ans;
// -6 >=0  --> do not add to answer;


function checkIsPositive(num)
{
    if(num >= 0)
    {
        return true;
    }
    // this--> browser object
    return false;
}

const myPostiveChecker = (num) => {
    if(num >= 0)
    {
        return true;
    }
    // this--> browser object
    return false;
}

function removeNegativeElements(nums, callback)
{
    let answer = [];

    for(let i = 0; i < nums.length; i++)
    {
        let result = callback(nums[i]);
        
        if(result == true)
        {
            answer.push(nums[i]);
        }
    }

    console.log(answer);
    
}


removeNegativeElements(numbers,myPostiveChecker);