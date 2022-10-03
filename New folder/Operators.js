//Operators are things or characters or symbols that tell a computer what to do with an operand
//Arithmetic operators does arithmetic operations
var num1 = 100;
var num2 = 300;

var num3 = 50, num4 = 200;
//Adition operator (+)
console.log(num1 + num2);
//Subtraction operator (-)
console.log(num1 - num2);
//Multiplication operator (*)
console.log(num1 * num2);
//Division operator (*)
console.log(num1 / num2);
//Remainder operator (% - modulous operator)
console.log(num1 % num2);

let first_name = "Mark\n";
let last_name = "Mugisha";
//Concatenating operation. Using (+) between strings
console.log(first_name + last_name);


//Assignment Operators
var age1 = 12;
var age2 = 43;
//age1 = age1 + 10
console.log(age1 += 10);
console.log(age1 -= 2);
console.log(age1 *= 2);
console.log(age1 /= 2);

//Logical Operators
var age3 = 5;
var age4 = 10;

//Not equal to operator
console.log(age3 != age4);

//Logical "and"  operator (both conditions should be true for the result to be true)
console.log((age3 < age4) && (age4 > age3));
console.log((age3 < age4) && (age4 < age3));

//logical  "or" operator (atleast one of the conditions should be true for the result to be true)
console.log((age3 < age4) || (age4 > age3));
console.log((age3 < age4) || (age4 < age3));
console.log((age3 > age4) || (age4 < age3));

//comparison operators
var age5 = 100;
var age6 = "100";
var gender = "Female";

//Equal operator (==) looks at whether the variables are identical 100 and "100" are identical
console.log(age5 == age6);
console.log(age5 == gender);
console.log(age5 == age6);

//Strict equal operator ie === checks whether the operands are identical and of the same kind
console.log(age5 === age6);

console.log(age5 < age6);//Less than

console.log(age5 > age6);//Greater than

console.log(age5 <= age6);//Less than or equal to

console.log(age5 >= age6);//Greater than or equal to

console.log(age5 != age6);//Not equal to

//Ternary operator
var a = 10, b = 5;
var c = a > b? a:b;//value c dependant on comparing a and b. If a is greater than b, then the value of c is a, if condition is false, then c takes the value of b (: stands for else or otherwise)
console.log(c)

//Increament operators
let xnum = 7;
let dnum = 14;
console.log(xnum++); //post increment. xnum++ literally means xnum + 1 . pre-increment is ++xnum
//above: first use xnum then add 1
console.log(xnum);
console.log(xnum--);
console.log(xnum);

console.log(xnum+=10); //increment by 10. This means that xnum = xnum + 10