var playerName = window.prompt ("what is your robot's name?");
var playerHealth = 100;
var playerAttack = 5;
var playerMoney = 10;


// You can also log multiple values at once like this
var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    // Alert palyers that they are starting the round
    window.alert("Welcome to Robot Gladiators!");
    console.log ("Your robot's name is " + playerName + ".");
    var promptFight = window.prompt("would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP to choose.");
    console.log(
        promptFight
    );
    // If player choses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT"){
    // Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result ot update the value in the 'enemyHealth' variable.
    enemyHealth = enemyHealth - playerAttack;
    // Log a resulting message to the consle so we know  that it worked.
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );
        // Check enemy's health
        if (enemyHealth <= 0) {
            window.alert (enemyName + " has died!");
        }
        else {
            window.alert (enemyName + " still has " + enemyHealth + " health left.");
        }

    // Subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result ot update the value in the 'playerHealth' variable.
    playerHealth = playerHealth - enemyAttack;
    // Log resulting message to the console so we know that it worked.
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );

    // Check player's health
    if (playerHealth <= 0) {
        window.alert (playerName + " has died!");
    } else {
        window.alert (playerName + " still has " + playerHealth + " health left.");
    }
    // if player choses to skip
    } else if (promptFight === "skip" || promptFight === "SKIP") {
        // confirm player wants to skip
        var confirmSkip = window.confirm ("Are you sure you'd like to quit?");

        // if yes (true), leave fight
        if (confirmSkip) {
            window.alert (playerName + " has decided to skip this fight. Goodbye!");
            //subtract money from playerMoney for skipping
            playerMoney = playerMoney - 2;
            console.log (playerName + " now has " + playerMoney + " money remaining.");
        }
        // if no (false), ask question again by running fight() again
        else {
            fight();
        }
       } else {
    window.alert("You need to choose a valid option. Try again!");
    }
}


fight();