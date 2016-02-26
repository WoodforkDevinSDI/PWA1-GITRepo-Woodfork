/*
 Devin Woodfork
 2/19/26
 Assignment: THE DUEL #3
 */

// console.log("test");

/* ***************PSEUDO CODE FOR DUE1 ************



 */

//self-executing function

(function () {
    //  fight_btn.onclick = fight;
    console.log("FIGHT!!!");
    //create onclick event handler for when button is pushed to start function

    document.getElementById("fight_btn").onclick = function () {
        //call the function the button will execute
        fight()
    };
//each player information in object with three properties
    //create player one's object with name, damage and health
    var player1 = {
        name: "Scooby-Doo",
        damage: 20,
        health: 100
    };
    //create player two's object with name, damage and health
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

//the initial round number at start of program declared
    var round = 0;

//fight function
    function fight() {
        console.log('in the fight function');


//  alert(player1[0] +":" + player1[2] +" *START* "+ player2[0] +":"+ player2[2]);
    //WRONG STRUCTURE    var playerOneHealth = document.querySelectorAll("p.kabal").innerHTML;
    //WRONG STRUCTURE   var playerTwoHealth = document.querySelectorAll("p.kratos").innerHTML;


//for loop for round count

      //  for (var i = 0; i < 10; i++) {
       //     console.log(i);

//player damage random number formula
        //declare playerOne's minimum damage formula
            var minDamage1 = player1.damage * .5;
        //declare playerTwo's minimum damage formula
            var minDamage2 = player2.damage * .5;
        //declare playerOne's random number for damage taken formula
            var f1 = Math.floor(Math.random() * (player1.damage - minDamage1) + minDamage1);
        //declare playerTwo's random number for damage taken formula
            var f2 = Math.floor(Math.random() * (player2.damage - minDamage2) + minDamage2);

            // console.log(f1);
            // console.log(f2);
        //change the value of playerOne's health to the results from the formula
            player1.health-= f1;
        //change the value of playerTwo's health to the results from the formula
            player2.health-= f2;

           //console.log(playerOneHealth);

           //console.log(playerTwoHealth);

//Displays player's name and health in console

            console.log(player1.name + ": " + player1.damage + player2.name + " : " + player2.damage);

            //change HTML code to display playerOne's name and current health
            document.querySelector("#kabal p").innerHTML = player1.name + ": " + player1.health;
            //change HTML code to display playerTwo's name and current health
            document.querySelector("#kratos p").innerHTML = player2.name + ": " + player2.health;


            //gets winner confirmation from winnerCheck function and displays results in console log

            var results = winnerCheck();
            console.log(results);

            //determines if winner has been made and if round is less than 10 if true then increment round by 1
            if (results === "no winner" && round <10) {
                //increments round by 1
                round++;
//ALERT NOT NEEDED ANYMORE             alert(player1[0] + ": " + player1[2] + " *ROUND " + round + " OVER*" + player1[0] + " : " + player2[2]);
                //changes the HTML code to display the round number above the fight button
                document.querySelector("#round_number").innerHTML = "Round: "+ round + " complete";
            } else {
//ALERT NOT NEEDED ANYMORE             alert(results);
                //changes the HTML code to display the results of the game
                document.querySelector("scores").innerHTML = "Game Over: " + results;

               //NOT NEEDED ANYMORE break
            }
        }
  //for loop  }

//function checks for the winner based on player's health

    function winnerCheck() {
        console.log("in winnerCheck FN");
        //declare the variable result as no winner by default
        var result = "no winner";
        //if statement declaring if both players health is less than one then both die
        if (player1.damage < 1 && player2.damage < 1) {
            result = "You Both Die";
        //elseif statement declaring that if only playerOne's health is less than 1 then declare playerTwo the winner
        } else if (player1.damage < 1) {
            result = player2.name + " WINS!!!";
         //elseif statement declaring that if only playerTwo's health is less than 1 then declare playerOne the winner
        } else if (player2.name < 1) {
            result = player1.name + " WINS!!!"
        }
//returns results of the winner
        return result;


    }


    /****** PROGRAM BEGINS ******/
    // console.log("program starts");

})();