/*
 Devin Woodfork
 2/19/26
 Assignment: THE DUEL #3
 */

// console.log("test");

/* ***************PSEUDO CODE FOR DUE1 ************



 */

//self-executing function

(function() {
    //  fight_btn.onclick = fight;
    //      console.log("FIGHT!!!");
    document.getElementById("fight_btn").onclick = function () {
        fight()
    };
//each player information in object with three properties
    var player1 = {
        name: "Scooby-Doo",
        damage: 20,
        health: 100
    };

    var player2 = {
        name: "Monsters",
        damage: 20,
        health: 100
    };


//player name
    //  var player1 = ["Scooby-Doo", 20, 100];
    // var player2 = ["Monsters", 20, 100];

//player damage
//    var player1Damage = 20;
//    var player2Damage = 20;

//player health
//    var playerOneHealth = 100;
//    var playerTwoHealth = 100;

    var round = 0;

//fight function
    function fight() {
        console.log('in the fight function');


//  alert(player1[0] +":" + player1[2] +" *START* "+ player2[0] +":"+ player2[2]);
        var playerOneHealth = document.querySelectorAll("p.kabal").innerHTML;
        var playerTwoHealth = document.querySelectorAll("p.kratos").innerHTML;


//for loop for round count

      //  for (var i = 0; i < 10; i++) {
       //     console.log(i);

//player damage random number formula
            var minDamage1 = player1.damage * .5;
            var minDamage2 = player2.damage * .5;
            var f1 = Math.floor(Math.random() * (player1.damage - minDamage1) + minDamage1);
            var f2 = Math.floor(Math.random() * (player2.damage - minDamage2) + minDamage2);

            // console.log(f1);
            // console.log(f2);
            playerOneHealth-= f1;
            playerTwoHealth-= f2;

           console.log(playerOneHealth);

           console.log(playerTwoHealth);

//Displays player's name and health in console

            console.log(player1.name + ": " + player1.damage + player2.name + " : " + player2.damage);

            playerOneHealth = player1.damage;
            playerTwoHealth = player2.damage;


//gets winner confirmation from winnerCheck function and displays results in console log

            var results = winnerCheck();
            console.log(results);

//determines if winner has been made and moves to next round if not
            if (results === "no winner") {
                round++;
//ALERT NOT NEEDED ANYMORE             alert(player1[0] + ": " + player1[2] + " *ROUND " + round + " OVER*" + player1[0] + " : " + player2[2]);
            } else {
//ALERT NOT NEEDED ANYMORE             alert(results);
                break
            }
        }
  //for loop  }

//function checks for the winner based on player's health

    function winnerCheck() {
        console.log("in winnerCheck FN");
        var result = "no winner";

        if (player1.damage < 1 && player2.damage < 1) {
            result = "You Both Die";
        } else if (player1.damage < 1) {
            result = player2.name + "WINS!!!"
        } else if (player2.name < 1) {
            result = player1.name + "WINS!!!"
        }
//returns results of the winner
        return result;


    }


    /****** PROGRAM BEGINS ******/
    console.log("program starts");

});