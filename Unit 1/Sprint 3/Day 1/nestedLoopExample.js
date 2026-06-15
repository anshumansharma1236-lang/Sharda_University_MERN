//Nested Loop: If inner loop iterations is dependent outer loop iteration then in this case we can use nested loop.


//Analogy - Golgappe
/*
Chintu ------ Kaka
|
Chinki
|
Chunnu
|
Munnu
|
Chaman




Chintu -- 10 Rs

1 Golgappa
2 Golgappa
3 Golgappa


Offer Time

Chintu, Chinki, Chunnu, Munnu, Chaman -----> Kaka
1 Golgappa - Chintu
1 Golgappa - Chinki
1 Golgappa - Chunnu
1 Golgappa - Munnu
1 Golgappa - Chaman

2 Golgappa - Chintu
2 Golgappa - Chinki
2 Golgappa - Chunnu
2 Golgappa - Munnu
2 Golgappa - Chaman


3 Golgappa - Chintu
3 Golgappa - Chinki
3 Golgappa - Chunnu
3 Golgappa - Munnu
3 Golgappa - Chaman

4 Golgappa - Chintu
4 Golgappa - Chinki
4 Golgappa - Chunnu
4 Golgappa - Munnu
4 Golgappa - Chaman

*/


// for(var chintu = 1; chintu <= 4; chintu++){
//     console.log(chintu, "Golgappa Done for Chintu")

//     for(var sibling=1;sibling<=4;sibling++){
//         console.log(chintu, "Golgappa Done for Sibling - ", sibling)
//     }
// }


/*
Father - Son Analogy:
Walk Together
Father - 1 Round, in my each round - son - 4 rounds


*/

// for(var father = 1; father <=4; father++){
//     console.log("Father started running round: ", father);
    
//     for(var son=1;son<=4;son++){
//         console.log("Son completed round:", son)
//     }
//     console.log("Father completed round: ", father);
// }


//Student Task:

/*
Father 1: Son Rounds: 1 2 3 4
Father 2: Son Rounds: 1 2 3 4
Father 3: Son Rounds: 1 2 3 4
Father 4: Son Rounds: 1 2 3 4
*/


// for(var father =1; father<=4;father++){
    
//     var bag = ""
//     for(var son = 1;son<=4;son++){
//         bag += son+" ";
//     }

//     console.log("Father", father, ": Son Rounds:",bag)

// }


//Outer Loop: Responsible for rows
//Innner Loop: Columns


/*
1 2 3 4
1 2 3 4
1 2 3 4
1 2 3 4
*/


// for(var row = 1; row<= 4; row++){
    
//     var bag = ""

//     for(var column = 1; column <= 4; column++){
//         bag+= column+" "
//     }

//     console.log(bag);
// }


/*

* * * * *
* * * * *
* * * * *
* * * * *

*/

// for(var row = 1; row<= 4; row++){
    
//     var bag = ""

//     for(var column = 1; column <= 5; column++){
//         bag+= "* "
//     }

//     console.log(bag);
// }


/*

* 
* *
* * *
* * * *
* * * * *

*/


for(var row = 1; row<= 5; row++){
    
    var bag = ""

    for(var column = 1; column <= row; column++){
        bag+= "* "
    }

    console.log(bag);
}



