//Nested Loop: Loop inside Loop
//Other Lang: When outer loop iteration is connected to set of iteration of inner loop.

/*

Why Golgappe:
10rs - 2 PCS:

Chintu - Regularly -- Kallu's Golgappe
Regular 10rs - 3 PCS
Offer 10rs - 5 PCS

---
Chinki
|
Chunnu
|
Munnu
|
Chaman

Cost = 50rs including chintu ----> Kallu

Line - Chintu --> Chinki ---> Chunnu ---> Munnu ---> Chaman ---- Kallu
1 Golgappa for Chintu
1 Golgappa for Chinki
1 Golgappa for Chunnu
1 Golgappa for Munnu
1 Golgappa for Chaman

---------------------
2 Golgappa for Chintu
2 Golgappa for Chinki
2 Golgappa for Chunnu
2 Golgappa for Munnu
2 Golgappa for Chaman

-----------------------

3 Golgappa for Chintu
3 Golgappa for Chinki
3 Golgappa for Chunnu
3 Golgappa for Munnu
3 Golgappa for Chaman

-----------------------

4 Golgappa for Chintu
4 Golgappa for Chinki
4 Golgappa for Chunnu
4 Golgappa for Munnu
4 Golgappa for Chaman


-----------------------

5 Golgappa for Chintu
5 Golgappa for Chinki
5 Golgappa for Chunnu
5 Golgappa for Munnu
5 Golgappa for Chaman




*/


// for(var chintu = 1; chintu <= 5;chintu++){
//     console.log(chintu, "Golgappa done for chintu")
//     // console.log(chintu, "Golgappa done for chinki")
//     // console.log(chintu, "Golgappa done for chunnu")
//     // console.log(chintu, "Golgappa done for munnu")
//     // console.log(chintu, "Golgappa done for chaman")

//     for(var sibling = 1; sibling <= 4; sibling++){
//         console.log(chintu, "Golgappa done for sibling-", sibling)
//     }

//     console.log("-----------------------------------")
// }


/*
Father - Son Analogy:
Father Age: 50 Years
Son Age: 20 Years

Agenda: Go For Walk

In each round of father son will do 4 rounds

*/


// for(var father = 1; father<=4; father++){

//     console.log("Father has started his round:", father)


//     for(var son=1;son<=4;son++){
//         console.log("Son has completed his round:", son)
//     }

//     console.log("Father has completed his round:", father)

// }


/*

Father Round 1: Son Rounds: 1 2 3 4
Father Round 2: Son Rounds: 1 2 3 4
Father Round 3: Son Rounds: 1 2 3 4
Father Round 4: Son Rounds: 1 2 3 4

*/

// for(var father = 1; father <= 4; father++){

//     var bag = ""

//     for(var son = 1; son <= 4; son++){
//         bag += son+" "
//     }

//     console.log("Fathe Round:", father, ": Son Rounds:", bag);

// }

/*

1 2 3 4
1 2 3 4
1 2 3 4
1 2 3 4

Outer Loop: Responsible for Rows
Inner Loop: Responsibel for columns

*/

// for(var row = 1; row <= 4; row++){

//     var bag = ""
//     for(var column = 1; column <= 4; column++){
//         bag+=column+" "
//     }
//     console.log(bag)
// }

/*

* * * * *
* * * * *
* * * * *
* * * * *


*/


// for(var row = 1; row <= 4; row++){

//     var bag = ""
//     for(var column = 1; column <= 5; column++){
//         bag+="* "
//     }
//     console.log(bag)
// }

/*

*
* *
* * *
* * * *
* * * * *


*/


for(var row = 1; row <= 5; row++){

    var bag = ""
    for(var column = 1; column <= row; column++){
        bag+="* "
    }
    console.log(bag)
}
