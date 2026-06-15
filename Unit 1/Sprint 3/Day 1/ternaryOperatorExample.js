//Ternary Operator: If you want to check conditions in short and simple way then you can use this operator



/*
Syntax
condition ? ifConditionTrue : ifConditionFalse;
*/


//Problem 1: Check number is odd or even.

var number = 34

//First Way
// if(number%2==0){
//     console.log("Even")
// }else{
//     console.log("Odd")
// }


//Second Way:
// console.log(number % 2 == 0 ? "Even" : "Odd")


// var result = number % 2 == 0 && number % 4 == 0 ? "Even and Divisible by 4" : "Odd or not divible by 4"

// console.log(result)


console.log(45 >= 45 ? 45 < 50 ? "True" : "Second False" : "First False")