//Problem Statement: print 1 to 10
// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)
// console.log(8)
// console.log(9)
// console.log(10)



//Loops: If you want particular lines of code must be repeat again and again then in this case you can use loop.

//Loop: Keeps on running.

//There are three type of loops:
//1. While loop
//2. Do while loop
//3. for loop
//Other loops which launched in ES6


//1. While loop - 

/*
while(condition){

}

Execution Process:
Step 1: Check condtion
Step 2: If condition true then it will execute block of code
Step 3: Again check condition then go to Step 2 if condtion false Step 4
Step 4: Stop the loop
*/


// while(true){
//     console.log("Hello")
// }

//Above loop is infinite loop that will not stop in any case, therefore it is important to design the condition such a way so that we can stop loop and start loop according to the requirement.

// var startingPoint = 1

// while(startingPoint <= 10){
    
//     console.log("Hello", startingPoint);

//     startingPoint = startingPoint + 1
// }



// var startingPoint = 1

// while(startingPoint <= 10){
    
//     console.log("Hello", startingPoint);

//     startingPoint += 1
// }



// var startingPoint = 1

// while(startingPoint <= 10){
    
//     console.log("Hello", startingPoint);

//     ++startingPoint
// }

// var sp = 1
// var sum = 0

// while( sp <= 10){
    
//     sum = sum + sp
    
//     sp++
// }

// console.log(sum)


//Problem 1: Print even number from 1 to 20


// var i = 1
// while(i <= 20){

//     //print numbers those are even
//     if(i%2==0){
//         console.log("Even:",i)
//     }else{
//         console.log("Odd:", i)
//     }

//     i++
// }

//Problem 2: Find total of even number and odd number from 1 to 20


// var i = 1
// var evenTotal = 0
// var oddTotal = 0
// while(i <= 20){

//     //print numbers those are even
//     if(i%2==0){
//         evenTotal+=i
//     }else{
//         oddTotal+=i
//     }

//     i++
// }

// console.log("Even Total:", evenTotal)
// console.log("Odd Total:", oddTotal)


//Problem: Print 1 to 10 numbers in one line
// 1 2 3 4 5 6 7 8 9 10

// var i = 1
// var bag = ""
// while(i <= 10){

//     //your logic
//     bag += i+" "

//     i++
// }
// console.log(bag);


// console.log("1" + 2) //12
// console.log("12 " + 3) //12 3


//Problem Last: Reverse the number

var number = 12345

/*
12345 
*/
// var bag = ""
// while(number!=0){
//     var lastDigit = number % 10
//     bag += lastDigit

//     number = parseInt(number / 10)
// }

// console.log(bag)


//Problem: Count digit of a number


// var count = 0;
// while(number!=0){
//     count++
//     number = parseInt(number / 10)
// }

// console.log(count)



//do while loop:

//First Iteration/round is optional in the case of do while loop and rest is similar.

/*
do{

}
while(condition)


*/


//Example:

// var i = 11

// do{
//     console.log(i)
//     i++
// }
// while(i <= 10)


//for loop: It is most useful loop as it is having consise way of writing iterative statement:

//Meaning: you can keep startingPoint, condition, increment/decrement

/*
for(startingPoint; condtion; incrmeent/decreemnt/jump){

}

*/


// for(var i=1; i <= 10; i++){
//     console.log(i)
// }


//Prime - Two Factors

//2 - 
/*

2/1 --- 1 Factor
2/2 --- 1 Factor
-----------------
        2 Factors - Prime

4
4/1 --- 1 Factor
4/2 --- 1 Factor
4/4 --- 1 Factor
-----------------
        3 Factors - Not Prime
*/

var number = 1;
var factorCount = 0

for(var i=1;i<=number;i++){

    if(number % i == 0){
        factorCount++
    }
}

if(factorCount==2){
    console.log("Prime")
}else{
    console.log("Not Prime")
}