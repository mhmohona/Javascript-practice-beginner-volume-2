/*
PLANNING A PROJECT
---------------------------
1.What do you want to make?
---------------------------

I want to create a zomble text adventure game where the player starts with a random scenario. They search for a weapon an fight a zombie.
The player has a 33% chance of getting bitten and losing, or killing the zombie and winning.

---------------------------
2. What steps do you think are necessary?
---------------------------

beginning:
1. Write scenarios
2. Store a list of possible scenarios
3. Alart a random scenario from the list of possible scenarios

Weapon:
1. Create a list of weapons
2. Save the list of weapons
3. Alart which weapon the player finds

--------------------------
3. What syntex or coding patterns might you use?
---------------------------

Arrays for lists
Need multiple random numbers so a randomNumber function


*/


var biginningSenearios = ["You wake up in a hospital. It is early quiet. Ypu tiptoe to the door and peek out.", "You are standing in an open field west of a white house hith a boarded front door. There is a small mailbox here", "Desperate thimes call for desperate measures. You see a small convenience store up sheed and decide to loot it for goods."];

function randomNumber(range) {
    return Math.round(Math.random() * range);
}

alert(biginningSenearios[ randomNumber( biginningSenearios.length -1 )] );




var weaponList = ["shovel", "crossball bat", "rubber chicken"];
var weapon = weaponList[randomNumber(weaponList.length - 1)];
alert("being that it is the zombie apocalypse, you decide to search for a weapon first. After surveying your surroundings you notice and grab a " + weapon + ". ");

alert("Suddenly a zombie bursts through the door! You ready your " + weapon + " and advance towards the zombie.");

var survival = randomNumber(2);

if (survival == 0)
    alert("The zombie bits you. you lose!!!");
else if( survival > 0)
    alert("you kill the zombie with your " + weapon + ". You win!");

