/*function sum(){
    var a = 10;
    var b = 12;
    var c = a + b;
    console.log(c);
}

sum();

function sum2(a, b){
    var c = a + b;
    console.log(c);
}
sum2(10, 20);
sum2(100, 200);
sum2(25);

/dynamic function or parameterized function. Gross and tax are parameters/formal
 arguments
All functionis are self-contained.
A return statement marks the end of execution
Parameters are placeholders for the value that is to be entered/
function paye(gross, tax){
    var netPay = gross - (gross*tax);
    console.log(netPay);
}
//1000000, 0.2 are arguments/actual parameters
paye(1000000, 0.2);
*/

//Create 3 parameterlized functions that are calling one another ie a,b,c. B will call c and c will call a

/*function houseCost(constructionCost){
    //var profit = constructionCost * 0.3
    var final = constructionCost + (constructionCost * 0.25);
console.log(final);
}
houseCost(43000000);

function loan(moneyAsked){
    var interest = (moneyAsked*0.01) *12;
    var total = moneyAsked + interest;
    console.log(total);
}
loan(20000000);

function debt(moneyPaid){
    var balance = loan() + (houseCost() - moneyPaid);
    console.log(balance);
}

debt(30000000);*/

/*function houseCost(constructionCost){
    //var profit = constructionCost * 0.3
    var final = constructionCost + (constructionCost * 0.25);
return final;
}
console.log(houseCost(43000000));

function loan(moneyAsked){
    var interest = (moneyAsked*0.01) *12;
    var total = moneyAsked + interest;
return total;
}
console.log(loan(20000000));

function debt(moneyPaid){
    var balance = loan(20000000) + (houseCost(43000000) - moneyPaid);
    console.log(balance);
}
debt(30000000);*/

/*Trial 3
function houseCost(constructionCost){
    //var profit = constructionCost * 0.3
    var final = constructionCost + (constructionCost * 0.25);
//return final;
    console.log(final);
}


function loan(moneyAsked){
    var interest = (moneyAsked*0.01) *12;
    var total = moneyAsked + interest;
//return total;
    console.log(total);
}


function debt(moneyPaid){
    return function houseCost(constructionCost){};
    return function loan(moneyAsked){};
    var balance = loan(moneyAsked) + (houseCost(constructionCost) - moneyPaid);
    console.log(balance);
}
houseCost(43000000);
loan(20000000);
debt(30000000);*/

//function a
function houseCost(constructionCost){
    var final = constructionCost + (constructionCost * 0.25);
    return final;
}
//console.log(houseCost(43000000))

//function b
function loan(moneyAsked){
    var interest = ( moneyAsked * 0.01 ) *12;
    var total = moneyAsked + interest;
    return total;
}
//console.log(loan(20000000))


// //function c

function debt(constructionCost, moneyPaid, moneyAsked){
    var balance = loan(moneyAsked) + houseCost(constructionCost) - moneyPaid;
    return balance;
}
console.log("Debt is " + debt(43000000,2000000,20000000));