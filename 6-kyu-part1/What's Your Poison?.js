/*
Description:
Summary:

We get an Array of ints, every int is the number of a rat which died after tasting the wine bottles, int range is 0-9, (we have 10 rats). we need to return an int from 1-1000 which represent the number of the poisoned bottle.

Good Luck

The Riddle:

The King of a small country invites 1000 senators to his annual party. As a tradition, each senator brings the King a bottle of wine. Soon after, the Queen discovers that one of the senators is trying to assassinate the King by giving him a bottle of poisoned wine. Unfortunately, they do not know which senator, nor which bottle of wine is poisoned, and the poison is completely indiscernible. However, the King has 10 lab rats. He decides to use them as taste testers to determine which bottle of wine contains the poison. The poison when taken has no effect on the rat until exactly 24 hours later when the infected rat suddenly dies. The King needs to determine which bottle of wine is poisoned by tomorrow so that the festivities can continue as planned. Hence he only has time for one round of testing. How can the King administer the wine to the rats to ensure that 24 hours from now he is guaranteed to have found the poisoned wine bottle?
*/
function find(rats) {
  return rats.reduce((a,b)=>a+Math.pow(2,b),0)
}
