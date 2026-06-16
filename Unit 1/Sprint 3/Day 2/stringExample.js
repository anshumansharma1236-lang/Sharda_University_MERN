// //String is collection of characters(numbers, special, alphabets) enclosed with single or double quoatation mark


// // var name = "Rakesh"
// // var password = "Rakesh@1234"
// // var adhaarCardNumber = "761883187331"
// // var email = "myemail@gmail.com"
// // var employeeName = 'E'


// // var name = "Hello"

// // console.log(name)

// // //0 based indexing
// // //Accessing using index
// // console.log(name[0])
// // console.log(name[4])

// // //method

// // console.log(name.charAt(0))



// //Updation: Yes/No(Correct):
// //Why Correct: String is immutable(Unchnagable)

// //Why Immutable: Because in the real application, string contains very important and secure data therefore developer by default kept it as immutable.


// var name = "Hello"

// console.log(name) //Hello

// name[0] = "T"

// console.log(name) //Hello


// var arr = [1,2,3,4]
// console.log(arr)// [1,2,3,4]

// arr[0] = 45;

// console.log(arr) // [45,2,3,4]




//Substring: small part of your original string in continous manner


// var str = "World"

// // Wor
// //Wld

// console.log(str.substring(0, 3))


// var str = "programming"
// var count = 0;

// for(var i=0;i<str.length;i++){
//     if(str[i]=='a' || str[i] =='e' || str[i] == 'i' || str[i]=='o' || str[i]=='u'){
//         count++;
//     }
// }

// console.log(count)


// var str = "proGrAmming"
// var smallString = str.toLocaleLowerCase();
// var vowels = "aeiou"
// var count = 0;

// for(var i=0;i<smallString.length;i++){
//     if(vowels.includes(smallString[i])){
//         count++;
//     }
// }

// console.log(count)

