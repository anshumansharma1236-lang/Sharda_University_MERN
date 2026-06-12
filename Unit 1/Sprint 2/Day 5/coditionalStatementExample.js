//Conditional Statement: - On the basis of condition we print particular stattement or do particular work.

//How do we create conditions: - comparison Operator


var age = 45;

//votiing condition 
// - greater than or equal

// console.log(age >= 18)


//We want to show some statement to the user 
//Solution - Conditional Statement:

//There are following conditional statements:
//1. if statement
//2. if else statement
//3. if elseif else statement
//4. Nested if else statement.


//1. if statement:

/*
synatx of if statement:

if(codition){

    if above condition is true

}

Note: if condition is true then if statement executes code inside its block.
*/


// if(true){
//     console.log("Condition is true")
// }

// var age = 35

// if( age >= 18){
//     console.log("You can vote")
// }

// if( age < 18){
//     console.log("You can't vote")
// }


// Problem Statement: Print you're eligble for vote only if person meeting below conditions:

//1. isIndian = true
//2. stateUp = true
//3. age >= 18

// var isIndian = true
// var stateUp = false
// var age = 45

// if(isIndian){
//     console.log("Stage 1: You're indian")
// }

// if(isIndian==false){
//     console.log("Stage 1: You're not indian therefor can't vote")
// }

// if(stateUp){
//     console.log("Stage 2: You live at Uttar Pradesh")
// }

// if(stateUp==false){
//     console.log("Stage 2: You don't live at Uttar Pradesh")
// }

// if(age >= 18){
//     console.log("Stage 3: You're eligible for vote")
// }

// if(age < 18){
//     console.log("Stage 3: You're not eligible for vote due to age")
// }


//if else statement: if the condition is true then executes code inside if block, if condition is false then execute code inside else block

//syntax

/*
if(codition){
    if condition is true
}else{
    if condition is false    
}
*/


var isGraduate = false
// var havingMernStackCertificate = true

// if(isGraduate){
//     console.log("You're graduate.")
// }else{
//     console.log("You're not graduate.")
// }


// var age = 12;

// if(age >= 18){
//     console.log("You're eligible for Driving.")
// }else{
//     console.log("You're not eligible for driving.")
// }


// var number = 20

// if(number % 2 == 0){
//     console.log(number, ":Even")
// }else{
//     console.log(number, ":Odd")
// }


// Problem: You're given a number check that number is negative, positive, or zero

//if else if else statement: once we have multiple independed conditions then in this case we can use if else if else statement.

/*
syntax:

if(condition1){
    when condition 1 is true
}
else if(condition2){

    when condition 2 is true

}
else if(condition3){
    when condtion 3 is true
}
else{
    if none of above condtions are true.    
}

Note: among all the conditions if any of the condition is true then that particular block of code will execute other code inside else block will execute

*/

// var studentName = "Chaman"

// if(studentName=="Rakesh"){
//     console.log("You can go for walk")
// }
// else if(studentName=="Deepak"){
//     console.log("You can go for studying")
// }
// else if(studentName=="Chinki"){
//     console.log("You can for preparing Lunch")
// }
// else{
//     console.log("You're Chaman and sit with me")
// }

//Nested If Else statement: 
/*

condition inside condition:
if inside another if

syntax:

if(condition1){

    if(condition2){
    
    }else{
        
        }
}
else{

}

*/

//Note: Nested if else used only when we have depended conditions

//Proble statement:

//Print You're selected for job if following conditions are true:

//1. isBCADegree = true
//2. isDsaStrong = true
//3. isWebDevelopmentStrong = true

// var isBCADegree = true
// var isDSAStrong = true
// var isWebDevelopmentStrong = true

// if(isBCADegree){
//     if(isDSAStrong){
//         if(isWebDevelopmentStrong){
//             console.log("You're selected for job")
//         }else{
//             console.log("You're not strong in web development")
//         }
//     }else{
//         console.log("You're not strong in dsa")
//     }
// }else{
//     console.log("You're not having BCA Degree")
// }


//Problem Statement: Check username and password according following condtion:
//1. if username = "admin"
//2. if password = "imadmin"
//if above both codition is true then print logged in successfuly

//Note: if username or password is wrong kindly give appropiate msg




