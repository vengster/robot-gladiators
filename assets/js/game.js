var playerName = window.prompt ("what is your robot's name?");
var playerHealth = 12;
var playerAttack = 30;


// You can also log multiple values at once like this
var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    // Alert palyers that they are starting the round
    window.alert("Welcom to Robot Gladiators!");
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
    }
    else {
        window.alert (playerName + " still has " + playerHealth + " health left.");
    }
};

fight();