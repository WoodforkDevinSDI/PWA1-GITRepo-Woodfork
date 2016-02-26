/*
 Devin Woodfork
 2/12/26
 Assignment: THE DUEL #3
 */

// console.log("test");

/* ***************PSEUDO CODE FOR DUE1 ************

CREATE PLAYER VARIABLE
CREATE PLAYER DAMAGE VARIABLE
CREATE PLAYER HEALTH VARIABLE
CREATE ROUND COUNT VARIABLE EQUAL TO ZERO
CREATE FUNCTION FOR FIGHT
CREATE ALERT TO DISPLAY PLAYER NAMES AND STARTING HEALTH
CREATE FOR LOOP FOR ROUND COUNT TO INCREASE BY ONE AND STOP AT 10
DISPLAY ROUND NUMBER IN CONSOLE
CREATE PLAYER ONE MINIMUM DAMAGE VARIABLE AND SET IT TO PLAYER DAMAGE * .5
CREATE PLAYER TWO MINIMUM DAMAGE VARIABLE AND SET IT TO PLAYER DAMAGE * .5
CREATE PLAYER ONE MATH FORMULA FOR RANDOM NUMBER FOR PLAYER ONE DAMAGE
CREATE PLAYER TWO MATH FORMULA FOR RANDOM NUMBER FOR PLAYER TWO DAMAGE
SET PLAYER ONE HEALTH VARIABLE TO PLAYER ONE MATH FORMULA
SET PLAYER TWO HEALTH VARIABLE TO PLAYER TWO MATH FORMULA
DISPLAY IN CONSOLE LOG THE PLAYER'S NAME AND HEALTH FOR BOTH PLAYERS
CREATE VARIABLE FOR RESULTS SET TO THE WINNER CHECK FUNCTION
DISPLAY IN CONSOLE LOG THE RESULTS
CREATE IF ELSE LOOP FOR WINNERCHECK
IF RESULTS EQUALS "NO WINNER" ADD ONE TO THE VARIABLE OF ROUND
CREATE ALERT DISPLAYING PLAYER'S NAMES AND HEALTH
ELSE IF RESULTS DOES NOT EQUAL "NO WINNER"
THEN CREATE ALERT DISPLAYING THE RESULTS VARIABLE
BREAK THE LOOP
CREATE WINNERCHECK FUNCTION
CREATE RESULT VARIABLE SET TO EQUAL "NO WINNER"
IF PLAYER ONE AND PLAYERTWO'S HEALTH IS LESS THAN ONE RESULT EQUALS "YOU BOTH DIE!"
ELSE IF PLAYERONE'S HEALTH IS LESS THAN ONE THEN RESULT EQUALS PLAYERTWONAME VARIABLE "WINS"
ELSE IF PLAYER TWO'S HEALTH IS LESS THAN ONE THEN RESULT EQUALS PLAYERONENAME VARIABLE "WINS"
RETURN RESULT
CREATE FIGHT FUNCTION CALL
END CODE

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