/*
Description:
Groups of characters decided to make a battle. Help them to figure out what group is more powerful. Create a function that will accept 2 variables and return the one who's stronger.

Rules:
Each character has its own power:
  A = 1, B = 2, ... Y = 25, Z = 26
  a = 0.5, b = 1, ... y = 12.5, z = 13
Only alphabetical characters can and will participate in a battle.
Only two groups to a fight.
Group whose total power (a + B + c + ...) is bigger wins.
If the powers are equal, it's a tie.
Examples:
  battle("One", "Two"); // => "Two"`
  battle("ONE", "NEO"); // => "Tie!"
*/
function battle(x, y) {
  let num1=0,
      num2=0;
  y.split(``).map(v=>v===v.toUpperCase()?num2+=v.charCodeAt()-64:num2+=(v.charCodeAt()-96)/2)
  x.split(``).map(v=>v===v.toUpperCase()?num1+=v.charCodeAt()-64:num1+=(v.charCodeAt()-96)/2)
  return num1>num2?x:num2>num1?y:"Tie!"
}
