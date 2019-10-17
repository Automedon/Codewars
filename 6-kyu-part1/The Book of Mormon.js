/*
Description:
The Mormons are trying to find new followers and in order to do that they embark on missions.

Each time they go on a mission, every Mormons converts a fixed number of people (reach) into followers. This continues and every freshly converted Mormon as well as every original Mormon go on another mission and convert the same fixed number of people each. The process continues until they reach a predefined target number of followers (input into the model).

Converted Mormons are unique so that there's no duplication amongst them.

Create a function Mormons(startingNumber, reach, target) that calculates how many missions Mormons need to embark on, in order to reach their target. While each correct solution will pass, for more fun try to make a recursive function.

All model inputs are valid positive integers.
*/
function Mormons(startingNumber, reach, target){
  let n = startingNumber
  for (var i=0;;i++){
    if (n>=target) return i
    n+=n*reach
  }
}
