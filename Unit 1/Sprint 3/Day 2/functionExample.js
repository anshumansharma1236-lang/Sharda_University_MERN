//Function is block of code for performing specific task:

//Music Player - Application - set of functions

//1. playMusic
//2. pauseMusic
//3. loopMusic
//4. increaseVolume
//5. decreaseVolume 


//declaration of function:

/*

function functionName(){
    //block of code
}

//Execution of function: we call function why its name and below is the execution process:

function welcome(){
    console.log("Welcome to Sharda University Agra!")
}

step 1: welcome() //calling function
step 2: function started executing itself
step 3: after executing entire code inside it, it returns something(if defined)
step 4: stop execution

*/


//Example:

function welcomeToShardaUniversityAgra(){
    console.log("Welcome to Sharda University Agra!")
}


// welcomeToShardaUniversityAgra()


//Example 2:

// function playMusic(){
//     console.log("Music Started playing..")
// }

// function pauseMusic(){
//     console.log("Music stopped playing..")
// }


// function loopMusic(){
//     console.log("Music Started looping..")
// }

// function increaseVolume(){
//     console.log("Music volume increased..")
// }


// playMusic()
// increaseVolume()
// loopMusic()
// pauseMusic()
// playMusic()


//Function Core Concept:

//1. Parameters - we define variable while creating the function those are known as parameters
//2. Argument - we pass value to the funciton while calling for those parameter this is known argument/actual value


// function add(a, b){
//     console.log(a+b)
// }


// add(45, 78) //45, and 78 are actual value for function paramters - argument
// add(67, 34)
// add(89, 90)

//Note: Funciton returns something


// function subtract(a, b){
//     var difference = a - b
//     return difference
// }


// var result = subtract(50, 20)
// console.log(result)
// console.log(subtract(56, 23))

// function makeSquare(arr){
//     var squareArr = []

//     for(var i=0;i<arr.length;i++){
//         squareArr.push(arr[i]**2)
//     }
//     return squareArr
// }


// var numbers = [2,3,4,5,6]

// var result = makeSquare(numbers)

// console.log(result)


//Student Task: Create function to check even and odd


// function checkEvenOrOdd(num){
//     if(num%2==0){
//         return "Even"
//     }else{
//         return "Odd"
//     }
// }

// console.log(checkEvenOrOdd(44))
// console.log(checkEvenOrOdd(45))


//Create a function which accept a string and return capital string.

//str = "hello", output = "HELLO"

//Inbuilt Maths related function:

//Math.abs()

console.log(Math.abs(-45))
console.log(Math.min(45, 34, 56, 89))
console.log(Math.max(45,0, 23, 12))

console.log(Math.floor(4.5))//4
console.log(Math.floor(4.6))//4
console.log(Math.floor(4.3))//4
console.log(Math.floor(4.9))//4

console.log(Math.ceil(4.5))//5
console.log(Math.ceil(4.6))//5
console.log(Math.ceil(4.3))//5
console.log(Math.ceil(4.9))//5

console.log("-------------------")

console.log(Math.round(4.5))//5
console.log(Math.round(4.6))//5
console.log(Math.round(4.3))//4
console.log(Math.round(4.9))//5
console.log(Math.round(44.9))//45


console.log("-------------------")

console.log(Math.pow(2,3)) //8
console.log(Math.pow(3,3)) //27


console.log("--------------------")

console.log(Math.floor(Math.random()* 10))










