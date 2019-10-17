/*
This Kata is intended as a small challenge for my students

All Star Code Challenge #4

Create a function, called getCollege, that takes in an object of an nba player, and returns the college that the player went to

var curry = {fname: "Steph", lname:"Curry", number:30, team:"Warriors", college:"Davidson"}
getCollege(curry) // ==> "Davidson"
*/
function getCollege(player){
  return player.college
}
