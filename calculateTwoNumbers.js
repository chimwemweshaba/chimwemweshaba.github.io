
//function to add two numbers
function addTwoNumbers(num1, num2)
{
    var x=document.getElementById(num1).value;
    var y=document.getElementById(num2).value;
    var sum=0;
    sum=Number(x) + Number(y);
    document.getElementById("ans").innerHTML = sum;
}

//function to subtract two numbers
function subTwoNumbers(num1, num2)
{
    var x=document.getElementById(num1).value;
    var y=document.getElementById(num2).value;
    var sum=0;
    sum=Number(x) - Number(y);
    document.getElementById("ans").innerHTML = sum;
}

//function to divide two numbers
function divTwoNumbers(num1, num2)
{
    var x=document.getElementById(num1).value;
    var y=document.getElementById(num2).value;
    var sum=0;
    sum=Number(x) / Number(y);
    document.getElementById("ans").innerHTML = sum;
}

//function to multiply two numbers
function multTwoNumbers(num1, num2)
{
    var x=document.getElementById(num1).value;
    var y=document.getElementById(num2).value;
    var sum=0;
    sum=Number(x) * Number(y);
    document.getElementById("ans").innerHTML = sum;
}