/*
He loves me, he loves me not or She loves me, she loves me not is a game of French origin (originally called effeuiller la marguerite in French), in which one person seeks to determine whether the object of their affection returns that affection. A person playing the game alternately speaks the phrases "He (or she) loves me," and "He (or she) loves me not," while picking one petal off a flower for each phrase. The phrase they speak on picking off the last petal supposedly represents the truth between the object of their affection loving them or not.

In the original French version of the game, the petals do not simply indicate whether the object of the player's affection loves the player, but to what extent in this order: "a little", "a lot", "passionately", "to madness", "not at all".

Build a function of the French version of this game, that takes in two arguments (number of petals, gender (male or female)) and tells what the last petal says.
*/
function love(petalnumber, gender) {
  let arr = ["a little", "a lot", "passionately", "to madness", "not at all"]
  let gen = gender==='Male'?'He':'She'
  return `${gen} loves me ${arr[(petalnumber-1)%arr.length]}`
}
