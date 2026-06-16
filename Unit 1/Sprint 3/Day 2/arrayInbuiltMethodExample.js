//push

var students = ["Rakesh", "Dinesh", "Kunal", "Chinki"]

console.log(students)
students.push("Harsh") // Harsh will be added at the end of all the element.
console.log(students)

//unshift

students.unshift("Rajni") // Rajni will be added front of all the element above.
console.log(students)


//Adding at specific index

students.splice(1, 0, "Yogita")

console.log(students)


//Deleting element:

//splice

students.splice(2, 2)

console.log(students)


//pop() - removed from the end

students.pop()

console.log(students)

students.shift()
console.log(students)


//other inbuilt methods:

// var studentStr = students.join("-")
// console.log(studentStr)

// var yogitaIndex = students.indexOf("Yogita")

// console.log(yogitaIndex)


//includes - seaching:

// console.log(students.includes("ku"))


var array = new Array(5)

array.fill(0)

console.log(array)




