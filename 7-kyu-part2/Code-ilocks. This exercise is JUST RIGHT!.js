/*
Description:
So first she tasted the porridge of the Great, Huge Bear, and that was too hot for her; ... * *And then she tasted the porridge of the Middle Bear, and that was too cold for her; ... And then she went to the porridge of the Little, Small, Wee Bear, and tasted that; and that was neither too hot nor too cold, but just right ; and she liked it so well that she ate it all up...

[The Story of the Three Bears](https://en.wikisource.org/wiki/English_Fairy_Tales/The_Story_of_the_Three_Bears)
...
Code-ilocks has found the cabin of the Three Objs. As she goes through she sees several Arrays of Strings that vary in quality.

Task
Create a function that will replace the String that is "Just Right" with "Code-ilocks". Make sure if the Element is "too much" that she doesn't end up in that index!

Example:
["Too Big","Too Small","Just Right"] => ["Too Big","Too Small","Code-ilocks"]
*/
function whichOne(arr) {
  return arr.map(v=>v==="Just Right"?v="Code-ilocks":v)
}
