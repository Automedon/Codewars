/*
This Kata is intended as a small challenge for my students

Create a function named bite(), that takes a LivingThing object as input. If the 'race' key of the object is 'human', the function should convert its 'race' to a 'zombie' and returning the, now modified, object.

Note: If the object does NOT have a 'race' of 'human', the return object should NOT be changed in any way.

function LivingThing(name,race){
  this.name=name;
  this.race = race;
}
var player = new LivingThing("Gary", "human");
bite(player) // => {name: "Gary", race: "zombie"};

var plant = new LivingThing("Carrot", "plant");
bite(plant) // => {name: "Carrot", race: "plant"};
*/
function bite(thing){
  if (thing.race==='human') thing.race='zombie'
  return thing
}
