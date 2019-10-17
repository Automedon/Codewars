/*
Description:
Welcome to the Mathematics gameshow. I'm your host, Apex Rhombus, and it's time for the lightning round!

Today we'll talk about a hypothetical bottle. This entire bottle weighs 120 grams. Its contents weigh twice as much as the bottle itself. What, may I ask, do the contents weigh?

...Did you guess 80 grams? Correct! Now that you've got that idea, I'm gonna ask you that question in 10 different ways so you'd better get ready!

Let's make a contentWeight function that takes in two parameters: bottleWeight and scale. This function will return the weight of the contents inside the bottle.

bottleWeight will be an integer representing the weight of the entire bottle (contents included).

scale will be a string that you will need to parse. It will tell you how the content weight compares to the weight of the bottle by itself. 2 times larger, 6 times larger, and 15 times smaller would all be valid strings (smaller and larger are the only comparison words).

The first test case has been filled out for you. Good luck!
*/

function contentWeight(bottleWeight, scale) {
  var s = parseInt(scale);
  return /larger/.test(scale) ? bottleWeight * s / (s+1) : bottleWeight / (s+1);
}
