/*
 Devin Woodfork
 2/6/26
 Assignment: Goal1: Assignment: Due1
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

    console.log("FIGHT!!!");

//player name
    var playerOneName = "Scooby-Doo";
    var playerTwoName = "Monsters";

//player damage
    var player1Damage = 20;
    var player2Damage = 20;

//player health
    var playerOneHealth = 100;
    var playerTwoHealth = 100;

    var round = 0;

//fight function
    function fight() {
    console.log('in the fight function');

    alert(playerOneName+":" +playerOneHealth+" *START* "+playerTwoName+":"+playerTwoHealth);

//for loop for round count

    for (var i=0; i < 10; i++){
        console.log(i);

//player damage random number formula
     var minDamage1 = player1Damage * .5;
     var minDamage2 = player2Damage * .5;
     var f1 = Math.floor(Math.random()*(player1Damage-minDamage1)+minDamage1);
     var f2 = Math.floor(Math.random()*(player2Damage-minDamage2)+minDamage2);

       // console.log(f1);
       // console.log(f2);
        playerOneHealth-=f1;
        playerTwoHealth-=f2;

        //console.log(playerOneHealth);
        //console.log(playerTwoHealth);

//Displays player's name and health in console

        console.log(playerOneName + ": " + playerOneHealth + playerTwoName+": " + playerTwoHealth);

//gets winner confirmation from winnerCheck function and displays results in console log

        var results = winnerCheck();
        console.log(results);
//determines if winner has been made and moves to next round if not
        if (results === "no winner") {
            round++;
            alert(playerOneName + ":" + playerOneHealth + " *ROUND " + round + " OVER*" + playerTwoName + ":" + playerTwoHealth);
        }else{
            alert(results);
            break
        }
      };
    };
//function checks for the winner based on player's health

    function winnerCheck(){
        console.log("in winnerCheck FN");
        var result="no winner";

        if (playerOneHealth<1 && playerTwoHealth<1) {
            result = "You Both Die";
        }else if(playerOneHealth <1){
            result =playerTwoName + "WINS!!!"
        }else if(playerTwoHealth <1){
            result =playerOneName + "WINS!!!"
        };
//returns results of the winner
        return result;



    };


    /****** PROGRAM BEGINS ******/
    console.log("program starts");
    fight();

})();