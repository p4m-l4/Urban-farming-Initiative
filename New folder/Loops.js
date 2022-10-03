/* for loop | while loop | switch*/
for(var item = 0; item <= 10; ++item){
    console.log(item)
}

for(let num = 0; num <= 20; num++){
    if(num % 2 != 0){
        console.log(num)
    }
}

//for loop
function firstloop(){
    for(var item = 0; item <=10; item++){
        
    }
}
function secondloop(){
    for(let num = 0; item <= 20; ++num){
        if(num % 2 != 0){
            console.log(num)
        }
    }
}

//while loop is the least used because the condition check is done one so if the ode has an error then the code is heavily affected
function thirdloop(){
   let num = 0;
   while(num <= 20){
    if(num % 2 != 0){
        console.log(num);
    }
   }
}
//Switch is used when we have many conditions to be executed