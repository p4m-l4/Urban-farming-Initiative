//Functions are named blocks of code that perform a specific task.
//Values within the function are self-contained and can not be accessed outside of the function
//Names of functions should be related to vriable sntax
//When a function is defined and you want it to run, it has to be called ie function invocation, invoke a function
//Function Add
/*function add(){
    let num1 = 20;
    let num2 = 30;
    let ans = num1 + num2;
    //Helps the funtion to expose something outside of itself in the funtion block
    return num1;
}
add();
console.log(add());

//Function that outputs even numbers that are multiples of 10 between 0 and 100 
function evenNumbers(){
    for(num = 0; num <= 100; num += 10){
        if(num % 2 == 0){
            console.log(num)
        }
    }
}
//evenNumbers();
*/
function netPay(){
    let gross = 1000000;
    let tax = gross * 0.3;
    var actualPay = gross - tax;
return actualPay;
}
//console.log(netPay());

function welfare(){
    var welFare = 50000;
    var takeHome = netPay() - welFare;
console.log(takeHome);
}

welfare();