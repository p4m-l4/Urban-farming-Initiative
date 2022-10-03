/* Control/flow statements. How can we control the execution of instructions we have in a computer
{} are called a pair f braces while () are a pair of parenthesis
a group of statements that are performing a specific task is called a block of code*/

var weight = 10;
if(weight < 50){
    console.log("You are underweight to donate blood.")
}

var salary = 700000;
var paye = 30;

if(salary < 300000){console.log("Your salary is non-taxable");}
if(salary > 300000){
    console.log(0.3 * salary)
}

let price1 = 2000;
if(price1 <= 2000){
    console.log("This product is entitled for VAT")
}
//The 'else' claues is used to contradict the 'if' clause
else{
    console.log("This product is not entitled for VAT")
}

//Nested 'if' is a condition maade based on another if condition
const number = 0;
if(number >= 0){
    if(number == 0){
        console.log("Your number is 0");
    }
    else{
        console.log("You have entered a positive number");
    }
}
else{
    console.log("Your number is negative");
}

//if else if
var mySal = 700000;
var yourSal = 500000;

if(mySal > yourSal){
    console.log("I am richer than you");
}
else if(mySal < yourSal){
    console.log("You are richer than me");
}
else if(mySal == yourSal){
    console.log("We are financially equal");
}