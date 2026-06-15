//Logical Operator: They are mainly/highly useful when you've multiple dependent conditions.


//There are following type of logical operators:
//1. AND (&&) - When all the conditions are true then it returns true if any of the condition is false then entire expression is false.

//2. OR (||) - When anyone condition is true among all the condition then it will return true if none of the condition is true then it returns false

//3. NOT (!) - When you want to particular condtion to true or false then you can use this NOT operator.


//using nested if else:

// if(username == "admin"){

//     if(password=="admin"){
//         console.log("Logged in successfully.")
//     }
//     else{
//         console.log("Invalid Password")
//     }

// }else{
//     console.log("Invalid username")
// }


//AND Operator:

// var username = "admin"
// var password = "admin"

// if(username=="admin" && password=="admin"){
//     console.log("Logged in Successfully.")
// }else{
//     console.log("Invalid Crendetials")
// }


//USING NESTED IF ELSE:

// var isMonday = true
// var isMorningTime = false;
// var isChintuThere = true;

// if(isMonday){

//     if(isMorningTime){
//         if(isChintuThere){
//             console.log("Let's go for walk.")
//         }else{
//             console.log("Nahi ja skte as chintu nahi hai.")
//         }
//     }else{
//         console.log("Can't go for walk as it is not morning time.")
//     }

// }else{
//     console.log("Can't go for walk as it is not monday today.")
// }


// //LOGICAL AND:

// if(isMonday && isMorningTime && isChintuThere){
//     console.log("Let's go for walk")
// }else{
//     console.log("Can't go for walk.")
// }


//OR


// var isDiwaliBreak = false;
// var summaryHolidays = false
// var isHoli = false

// if(isDiwaliBreak || summaryHolidays || isHoli){
//     console.log("Its break time.")
// }else{
//     console.log("Study Time.")
// }



//NOT operator: true to false, or false to true

// var isFriday = false

// if(!isFriday){

//     console.log("Party Time")

// }else{
//     console.log("Study Time")
// }


//Student Task

var age = 20;
var isDisqualified = false

if(age >= 18 && !isDisqualified){
    console.log("True")
}else{
    console.log("False")
}
