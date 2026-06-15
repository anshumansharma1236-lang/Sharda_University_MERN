//Switch Case: When you've multiple independent condition in this case you can use switch case rather than if else if else statement (because as of compare to this switch is more consise way)


/*
Syntax

switch(variable){

    case value:
        console.log("Value is true")
        break
    case value:
        console.log("Value is true")
        break
    case value:
        console.log("Value is true")
        break
    case value:
        console.log("Value is true")
        break
    default:
        coonsole.log("Default case")

}


*/


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


var dayNumber = 3

switch(dayNumber){

    case 1:
        console.log("Monday")
        break
    case 2:
        console.log("Tuesday")
        break
    case 3:
        console.log("Wednesday")
        break
    case 4:
        console.log("Thursday")
        break
    case 5:
        console.log("Friday")
        break
    case 6:
        console.log("Saturday")
        break
    case 7:
        console.log("Sunday")
        break
    default:
        console.log("Invalid Day Number")
}



