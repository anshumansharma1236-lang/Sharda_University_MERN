

// Variable - Its like a box which store data and we assign name to the container(variable) so that later we can access or update


//Declaration(Creation) of Variable in Javascript

// syntax: how to use(write) particular concept

// var variableName

// Example:

// Decalaration
// var name
// var age
// var salary

// // Initialization(Storing value to variable)

// console.log(name)

// name = "Rakesh Singh"
// age = 45
// salary = 239909.32

// console.log(name, age, salary)


// Initialization at the time Declaration


var employeeName = "Deepak Kumar"
console.log(employeeName)

//Multiple Variable Declaration:

var name, age, salary


//Multiple Variable Declaration and Inializatio:
var name = "Suresh", age = 23, salary = 99999.99

console.log("Name:",name, "Age", age, "Salary", salary)


//Variable Creation Rules:=

//1.Start with a letter, underscore (_), or dollar sign ($).

//Example valid variable name:
// var name
// var studentName
// var $name
// var _name

//Example invalid variable name:

// var #name
// var %percantage
// var 1name

//2. Can contain letters, numbers, underscores, and dollar signs.

//Examples for valid variable names:

// var name1
// var name2
// var student1Name
// var father_name
// var compary$

//Examples for invalid variable names:

// var name&
// var student_#name;
// var father name

//3. Case-sensitive, myVar, and myvar are considered different variables.

//Example for valid variable names:

// var Myar, myvar

//4. Avoid using JavaScript-reserved words as variable names like.

// var if //invalid variable name as if is resevered word or predefined word

// var If
// var for
// var foR



//Variable Naming Conention
//Note: For multi-word variable names

//1. camelCaseNamingConvention
// Used for variable, file, and function/method name

var studentName
var myClassTeacherName
var employeeFirstName

//1. snake_case_naming_convention

var student_name 
var father_name
var my_first_name