//Array: Collection/Set of similar type of data, stored in continous memory location, and allow to access element using index.



//1. Homogenous: Same type of data:
//Declaration Of Array:
var myArr1 = []

//Adding elements/values to above array:
//1. using indexing

// myArr1[0] = 45
// myArr1[1] = 46
// myArr1[2] = 47

//1. push(value): it adds at the last of array.

//myArr1.push(48)

//console.log(myArr1) // [45, 46, 47]

//Initialization at the time of Declaration
// var myArr2 = [1,2,3,4,5,6,7,8,9]

// console.log(myArr2)


//Updation of element:

//1. using index:
// myArr2[0] = 10

// console.log(myArr2)


//Accessing the elements/item:

//1. using index

// var fruits = ["apple", "banana", "guava", "orange", "kiwi"]

// console.log(fruits[1])
// console.log(fruits[4])


//2. accessing element using loop:
//Note: important for running loop:
//2.a - starting point - 0
//2.b - ending point - array property - length
//2.c - jump

// var totalElements = fruits.length
// console.log(totalElements)

// for(var index = 0; index < totalElements; index++){
//     console.log(fruits[index])
// }

//more: shorter way:

// for(var i = 0; i < fruits.length; i++){
//     console.log(fruits[i])
// }

//more shorter way:
// for in loop: it iterates through array index.


// for(var index in fruits){
//     console.log(fruits[index])
// }

//Student Task: Create an array of 10 numbers and print only even number from that array.

//Student Task: Loop through above array and print square of every element.

//Student Task: Loop through above array and print only prime numbers


//More About Array:
//1. Discussed about array with same type value : Done
//2. Array with different type of values : This is worst choice in case of array.


// var mixArray = [true, "hello", 34, true, "hi", 56, 34]

// var employeeArray = ["EMID-123", "Rakesh Kumar", 45, true, "Noida", "EMID-124", "Deepak Kumar", 34, false, "Delhi", "EMID-125", "Albert Mishra", 20, false, "Agra"]

// var employeeIds = ["EMID-123", "EMID-124", "EMID-125"]

// var employeeNames = ["Deepak Kumar", "Rakesh Kumar", "Ablert Mishra"]

// var employeeAges = [45, 34, 20]

// var employeeMarriageStatus = [true, false, false]

// var employeeAddresses = ["Noida", "Delhi", "Agra"]


//Solution: if we want to keep different type of data in an array: - Object


//3. Insertion and Deletion is the worst choice in case of array.


var employeeAddresses = ["Noida", "Delhi", "Agra", "Mathura"]

//4. Array is best choice for accessing, searching, and sorting.


//Type of array:

//1. 1D Array:

// var numbers = [2,3,4,5,67,12,34,11,0]

//Example: find minimum element in above array

// var minValue = numbers[0]

// for(var i=1; i<numbers.length;i++){
//     if(minValue > numbers[i]){
//         minValue = numbers[i]
//     }
// }

// console.log(minValue)

//2. 2D Array: - here you can store multiple elements of same type in form rows and columns.


// var array = [
//     [1,2,3],
//     [4,5,6], 
//     [7,8,9]
// ]

//Note: 2D array is collection of 2d array.

//Accessing element from 2d array: row, and column - arrayNumber[row][column]
// console.log(array[1][1]) //5
// console.log(array[2][2]) //9


//Rows Print:
// console.log(array.length)

// //Columns Print:
// console.log(array[0].length)


// for(var row = 0; row < array.length; row++){

//     var bag = ""
//     for(var column = 0;column<array[row].length;column++){
//         bag+=array[row][column]+" "
//     }
//     console.log(bag)
// }

//Student Task: Print below 2d array element in 2d format.
  
var array = [
    [1,2,3],
    [4,5,6,7], 
    [7,8]
]

for(var row = 0; row < array.length; row++){

    var bag = ""
    for(var column = 0;column<array[row].length;column++){
        bag+=array[row][column]+" "
    }
    console.log(bag)
}








