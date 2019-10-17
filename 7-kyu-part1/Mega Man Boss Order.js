/*
Description:
In the classic Mega Man games, you'd start the game with one weapon (called 'Buster'), and you'd have to defeat 8 robot bosses. Each time you defeated a robot boss, you'd acquire that boss's weapon to use in future fights against the other robot bosses.

https://en.wikipedia.org/wiki/Mega_Man#Original_series [this link is purely optional]

There was a cycle among bosses, where each robot boss was weak to one of the other robot's weapons, so you'd have an easier time if you beat the bosses in a specific order so as to exploit their weaknesses (Mega Man 3 was weird, and didn't quite have a cycle). For instance, in Mega Man 2, Bubble Man was weak to Metal Man's Metal Blade weapon, so it made sense to beat Metal Man and acquire the Metal Blade before facing Bubble Man. Kind of like rock, paper, scissors, but in robot form :)

Your task in this kata is to find the 'easiest' boss order, given an array of boss objects.

class Boss {
  constructor(name, weapon, weakness, difficulty) {
    this.name = name; // string
    this.weapon = weapon; // string
    this.weakness = weakness; // string
    this.difficulty = difficulty; // Integer in [1,8]
  }
}
Each Boss object has a name, a weapon, a weakness, and a difficulty rating. Whenever you beat a boss, you acquire their weapon to use against future bosses. If you have the weapon a boss is weak against, you can assume you'll beat that boss no matter what.

However, since you start with only the Buster, which no boss is weak against, you'll always want to start with the boss with the lowest difficulty value (difficulty === 1). From there, you can completely ignore difficulty levels, and focus on exploiting weaknesses instead.

Given an array of boss objects, your task is to return an array containing the names of the bosses to fight, in 'easiest' order. 'Easiest' order means the following:

You always start with the boss with difficulty level === 1

After the first boss, you only pick a boss if it's weak to a weapon that you have.

For example, given the following excerpt of robot bosses:

let masters = [
 {
   name: 'Fire Man',
   weapon: 'Fire',
   weakness: 'Water',
   difficulty: 5
 },
 {
   name: 'Water Man',
   weapon: 'Water',
   weakness: 'Electricity',
   difficulty: 6
 },
 {
   name: 'Wood Man',
   weapon: 'Leaf Shield',
   weakness: 'Fire',
   difficulty: 1
 },
 {
   name: 'Electric Man',
   weapon: 'Electricity',
   weakness: 'Leaf Shield',
   difficulty: 8
 }
]
the order in which you'd want to fight the bosses would be:

["Wood Man", "Electric Man", "Water Man", "Fire Man"]
Because Wood man has difficulty === 1, you start there. Defeating Wood Man gives you his Leaf Shield weapon. From there, Electric Man is weak to Leaf Shield, and defeating Electric Man gives you Electricity. Water Man is weak to Electricity, and Fire Man is weak to Water, and so on.

Some things to keep in mind:

There will be only one robot boss with difficulty === 1. Always start with this robot master.

If you have the weapon a boss is weak againt, you can simply ignore their difficulty level. I.E. ignore difficulty levels after the first boss - they're used only because we have to start somewhere in the cycle.

Each boss is weak to exactly one weapon

No two bosses are weak to the same weapon

Each random test is isolated, so don't worry if you see the same boss appearing in different orders in different random tests.

Solutions are unique. There is exactly one correct ordering to the boss order array in this kata. This is not true in the real games, but this is a simplification :)

It's up to you to choose how to keep track of weapons you've acquired. Enjoy, and please let me know if you have any suggestions!
*/

function getBossOrder(bosses) {
  var s=[bosses.find(b=>b.difficulty===1)];
  while(s.length<8) s.push(bosses.find(b=>b.weakness===s[s.length-1].weapon))
  return s.map(b=>b.name);
}
