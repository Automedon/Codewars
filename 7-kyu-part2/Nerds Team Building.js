/*Nerds are about to fight because someone wants the last Pop-Tart.🧁 Since they don't wanna break any glasses or teeth 💥👓💥🦷, they decided to form teams with their favorite idols to play a Quidditch🧙 game and determine a winner.🤓

Each team should be composed by: A Captain 💪, A Referee 🚩 and at least two players ⛹️‍♀️⛹️‍♂️.

Write a function accepting a string as parameter with all the team's fellows and return an object with each people role/name.

=> the string is always in the same format (Ex : 'A,B,C,D')

=> the string could be empty

=> the string could contains duplicates - these should be removed before processing subsequent rules

=> the first person of the list (excluding duplicates) will always be captain

=> the second person of the list (excluding duplicates) will always be the referee

=> the rest of the people will always be the players list into an array

=> guys should have only one role (someone can't be referee and player, for exemple.)

Exemple :

string = 'Eric,Kenny,Kyle,Stan'

result = { captain: "Eric", referee: "Kenny", players: ["Kyle", "Stan"] }

If the team built doesn't meet the conditions, the game is canceled and the function should returns 'Game canceled'
*/

const teamBuilding = (team) => {
  const arr = [...new Set(team.split(','))]
  if(arr.length<4){
    return 'Game canceled'
  }
  return {
    captain: arr.slice(0,1)[0],
    referee: arr.slice(1,2)[0],
    players: arr.slice(2)
  }
};
