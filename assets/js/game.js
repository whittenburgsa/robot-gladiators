var playerName = window.prompt("What is your name?");
var playerHealth = 100;
var playerAttack = 10;

//You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    //Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");    

// put new code under this
console.log(
  playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
);

//check enemy's health
if (enemyHealth <= 0) {
  window.alert(enemyName + "has died!");
}

else {
  window.alert(enemyName + "still has" + enemyHealth + "health left.");
}

fight();

};

