var playerName = window.prompt ("what is your robot's name?");
var playerHealth = 100;
var playerAttack = 25;
var playerMoney = 10;



var enemyHealth = 50;
var enemyAttack = 12;
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];



var fight = function(enemyName) {
    // Alert palyers that they are starting the round
    while(playerHealth > 0 && enemyHealth > 0){
    window.alert("Welcome to Robot Gladiators!");
    //console.log ("Your robot's name is " + playerName + ".");
    var promptFight = window.prompt("would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP to choose.");
   
    // if player choses to skip
    if (promptFight === "skip" || promptFight === "SKIP") {
    // confirm player wants to skip
    var confirmSkip = window.confirm ("Are you sure you'd like to quit?");
    
    // if yes (true), leave fight
    if (confirmSkip) {
        window.alert (playerName + " has decided to skip this fight. Goodbye!");
        //subtract money from playerMoney for skipping
        playerMoney = playerMoney - 10;
        console.log ("Player Money", playerMoney);
        break;
        }
    }
    
    
    
    
    
    
    // console.log(
    //     promptFight
    //     );
        // If player choses to fight, then fight
        //if (promptFight === "fight" || promptFight === "FIGHT"){
            // Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result ot update the value in the 'enemyHealth' variable.
            enemyHealth = enemyHealth - playerAttack;
            // Log a resulting message to the consle so we know  that it worked.
            console.log(
                playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
                );
                // Check enemy's health
                if (enemyHealth <= 0) {
                    window.alert (enemyNames [i] + " has died!");
                    break;
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
            break;
        } 
        else {
        window.alert (playerName + " still has " + playerHealth + " health left.");
        }
    }
};


//fight();

for(var i = 0; i < enemyNames.length; i++){
    if (playerHealth > 0){
        window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));
    
        var pickedEnemyName = enemyNames[i];
        enemyHealth = 50;
        fight(pickedEnemyName);
}
else {
    window.alert('You have lost your robot in battle! Game Over!');
    break;
    }
}