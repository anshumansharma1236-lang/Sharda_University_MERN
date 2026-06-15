//Nested Loop: Loop inside Loop:
//When inner loop is dependent on outer loop.
//When outer loop first iteration is connected to inner loop set of iteration

//Analogy:
/*
Chintu -----> Kallu's Golgappe
Cost: 10 Rs ----- kallu -- 1 Golgappa ---> 2 Golgappa

Regular Price - 10rs - 2 Pcs
Offer Price - 10 rs - 5 Pcs

Chintu Siblings:

Chinki
|
Chunnu
|
Munnu
|
Chaman


Chintu ---> Chinki---> Chunnu ---> Munnu ---> Chaman --> Kallu

1 Golgappa done for Chintu
1 Golgappa done for Chinki
1 Golgappa done for Chunnu
1 Golgappa done for Munnu
1 Golgappa done for Chaman
--------------------------

2 Golgappa done for Chintu
2 Golgappa done for Chinki
2 Golgappa done for Chunnu
2 Golgappa done for Munnu
2 Golgappa done for Chaman
--------------------------

3 Golgappa done for Chintu
3 Golgappa done for Chinki
3 Golgappa done for Chunnu
3 Golgappa done for Munnu
3 Golgappa done for Chaman

--------------------------

4 Golgappa done for Chintu
4 Golgappa done for Chinki
4 Golgappa done for Chunnu
4 Golgappa done for Munnu
4 Golgappa done for Chaman

--------------------------

5 Golgappa done for Chintu
5 Golgappa done for Chinki
5 Golgappa done for Chunnu
5 Golgappa done for Munnu
5 Golgappa done for Chaman

*/


// for(var chintu = 1; chintu <= 5; chintu++){
//     console.log(chintu, "Golgappa done for chintu")

//     // console.log(chintu, "Golgappa done for chinki")
//     // console.log(chintu, "Golgappa done for Chunnu")
//     // console.log(chintu, "Golgappa done for Munnu")
//     // console.log(chintu, "Golgappa done for Chaman")

//     for(var sibling=1;sibling <= 4;sibling++){
//        console.log(chintu, "Golgappa done for sibling-", sibling) 
//     }

//     console.log("---------------------------------")
// }

/*
Father-Son Analogy:
Father - 50 Years
Son - 20 Years

Agenda: Go for Walk


*/

// for(var father = 1; father <= 4; father++){
//         console.log("Father has started his round:",father)

//         // console.log("Son has completed his round 1")
//         // console.log("Son has completed his round 2")
//         // console.log("Son has completed his round 3")
//         // console.log("Son has completed his round 4")

//         for(var son = 1; son<=4;son++){
//             console.log("Son has completed his round:",son)
//         }


//         console.log("Fathe has completed his round:",father)
// }


/*

Father Round 1: Son Rounds: 1 2 3 4
Father Round 2: Son Rounds: 1 2 3 4
Father Round 3: Son Rounds: 1 2 3 4
Father Round 4: Son Rounds: 1 2 3 4

*/


// for(var father = 1; father <= 4; father++){

//         var bag = ""
//         for(var son = 1; son<=4;son++){
//             bag += son+" "
//         }
//         console.log("Father Round",father+": Son Rounds:", bag)
// }

/*
Outer Loop: Responsible for Rows:
Inner Loop: Responsible for Columns


1 2 3 4
1 2 3 4
1 2 3 4
1 2 3 4

*/

// for(var father = 1; father <= 4; father++){

//         var bag = ""
//         for(var son = 1; son<=4;son++){
//             bag += son+" "
//         }
//         console.log(bag)
// }

/*


* * * * *
* * * * *
* * * * *
* * * * *

*/

// for(var father = 1; father <= 4; father++){

//         var bag = ""
//         for(var son = 1; son<=5;son++){
//             bag += "* "
//         }
//         console.log(bag)
// }

/*


*
* *
* * *
* * * *
* * * * *

*/

for(var father = 1; father <= 5; father++){

        var bag = ""
        for(var son = 1; son<=father;son++){
            bag += "* "
        }
        console.log(bag)
}


/*


1
1 2
1 2 3
1 2 3 4
1 2 3 4 5

*/
