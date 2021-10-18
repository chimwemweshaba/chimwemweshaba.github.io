//initialise global variables
var x = 0, y = 0, ans = 0;

//function to add two numbers
function addTwoNumbers(input1, input2)
{
    x = input1.value;
    y = input2.value;
    ans = 0;
    ans = Number(x) + Number(y);
    return ans;
}

//function to subtract two numbers
function subTwoNumbers(input1, input2)
{
    x = input1.value;
    y = input2.value;
    ans = 0;
    ans = Number(x) - Number(y);
    return ans;
}

//function to divide two numbers
function divTwoNumbers(input1, input2)
{
    x = input1.value;
    y = input2.value;
    ans = 0;
    ans = Number(x) / Number(y);
    return ans;
}

//function to multiply two numbers
function multTwoNumbers(input1, input2)
{
    x = input1.value;
    y = input2.value;
    ans = 0;
    ans = Number(x) * Number(y);
    return ans;
}