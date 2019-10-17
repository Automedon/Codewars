/*
Description:
This Kata is intended as a small challenge for my students

All Star Code Challenge #31

Walter has a doctor's appointment and has to leave Jesse in charge of preparing their next "cook". He left Jesse an array of Instruction objects, which contain solutions, amounts, and the appropriate scientific instrument to use for each step in the "cook". The order of the instructions must be carried out in the EXACT order they're given. However, Jesse doesn't understand JavaScript and just needs things simplified!

Create a function called helpJesse() that accepts an array of Instruction objects as an argument. The function should convert each object into a string of the following format:

"Pour {amount} mL of {solution} into a {instrument}"

It should return an array of each object-to-string conversion, in the same order given.

Walter may leave an optional "note" in the Instruction object, which should be included at the end of the string in parentheses, like so:

"Pour {amount} mL of {solution} into a {instrument} ({note})"

function Instruction(amount, solution, instrument, note){
  this.amount=amount;
  this.solution=solution;
  this.instrument=instrument;
  if (note){
    this.note = note;
  }
}

var recipe = [
  new Instruction(5,"Sodium Chloride","Graduated Cylinder"),
  new Instruction(250,"Hydrochloric Acid","Boiling Flask"),
  new Instruction(100,"Water","Erlenmeyer Flask", "Do NOT mess this step up, Jesse!")];

helpJesse(recipe);
// ["Pour 5 mL of Sodium Chloride into a Graduated Cylinder",
// "Pour 250 mL of Hydrochloric Acid into a Boiling Flask",
// "Pour 100 mL of Water into a Erlenmeyer Flask (Do NOT mess this step up, Jesse!)"]
Note:
Assume all keys in the Instruction objects are properly filled and do not need to be checked for format or value type.
*/
function helpJesse(array){
  let arr = [];
  array.map(v=>arr.push(`Pour ${v.amount} mL of ${v.solution} into a ${v.instrument}${v.note?` (${v.note})`:''}`))
  return arr
}
