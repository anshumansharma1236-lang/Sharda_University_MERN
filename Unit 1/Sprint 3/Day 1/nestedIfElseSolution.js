//Nested If Else Solution


//Independent Conditiions:

//Problem 1: Print Day name on the bases of day number.

//Day 1 - Monday
//Day 2 - Tuesday

//Note: Once you've independent conditions in this case you can use either if else ladder or use switch case
// var dayNumber = 3

// if(dayNumber==1){
//     console.log("Monday")
// }
// else if(dayNumber == 2){
//     console.log("Tuesday")
// }
// else if(dayNumber == 3){
//     console.log("Wednesday")
// }
// else if(dayNumber == 4){
//     console.log("Thursday")
// }
// else if(dayNumber == 5){
//     console.log("Friday")
// }
// else if(dayNumber == 6){
//     console.log("Saturday")
// }else if(dayNumber == 7){
//     console.log("Sunday")
// }else{
//     console.log("Invalid Day Number")
// }


//Dependent Condition: Where one condition is dependent on another condition.


//Example: Let's go for walk if the day is monday and time as morning.


//Note: Once you've dependent conditions then in this case you can either use nested if else or use logical operators.


var isMonday = true
var isMorningTime = false;
var isChintuThere = true;

if(isMonday){

    if(isMorningTime){
        if(isChintuThere){
            console.log("Let's go for walk.")
        }else{
            console.log("Nahi ja skte as chintu nahi hai.")
        }
    }else{
        console.log("Can't go for walk as it is not morning time.")
    }

}else{
    console.log("Can't go for walk as it is not monday today.")
}


var username = "admin"
var password = "admin"

if(username == "admin"){

    if(password=="admin"){
        console.log("Logged in successfully.")
    }
    else{
        console.log("Invalid Password")
    }

}else{
    console.log("Invalid username")
}


//Note: above code is less readable and hard to maintain in the case when we more dependent condition.

//Solution: Logical Operators.

