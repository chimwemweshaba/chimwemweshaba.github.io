//initialise global variables
var num1 = 0, num2 = 0, ans = 0;

//function to add two numbers
function addTwoNumbers(input1, input2)
{
    num1 = Number(input1.value);
    num2 = Number(input2.value);
    ans = num1 + num2;
    return ans;
}

//function to subtract two numbers
function subTwoNumbers(input1, input2)
{
    num1 = Number(input1.value);
    num2 = Number(input2.value);
    ans = num1 - num2;
    return ans;
}

//function to divide two numbers
function divTwoNumbers(input1, input2)
{
    num1 = Number(input1.value);
    num2 = Number(input2.value);
    ans = num1 / num2;
    return ans;
}

//function to multiply two numbers
function multTwoNumbers(input1, input2)
{
    num1 = Number(input1.value);
    num2 = Number(input2.value);
    ans = num1 * num2;
    return ans;
}