/*
Description:
Story
Alien mouths

You are a cook in an alien restaurant at a distant planet called Kahumo.

These aliens have some specific physiology features:

Aliens eat only one type of food in one day. Each food has a special factor called flavour (let's designate it as k hereafter).
Each alien has several mouths of different size. The amount of food each mouth eats depends on mouth number. Second mouth must eat exactly k times more than the first, third mouth must eat exactly k times more than the second, and so on.
For example, if k is 2, and the first mouth ate 1 kg of food, second mouth must eat 2 * 1 = 2 kg of food, third eats 2 * 2 = 4 kg of food, fourth eats 2 * 4 = 8 kg and so on.

Food on Kahumo is very valuable and spoils fast. This means that if a client orders a certain amount of food, you have to serve it all in the exact proportions required for each of your client's mouths. If any of client's mouths eats less or more than requested, client will feel pain in his stomach, and may spray your eyes with his mildly acidic emotion fluid (which also is kahumoling saliva) as a sign of disrespect. (Please, not again, this juice in my eyes makes me sick!)

Kahumolings have very sensitive tongues, but not absolutely sensitive. They can feel deviations within 9 grams. This means that if you serve your client 100.005 kg of food instead of 100.000, kahumoling will probably not notice.

Function features
Arguments
food is the amount of food your client has ordered.
flavour is the k factor of the food your client ordered.
mouths is the amount of mouths of your client.
Return format
Serve the result in the following format: [x, y, z, ...], where values correspond to the amount of food served to a certain mouth (float; you can round it to 3 decimal places) in ascending order (low to high).
Tests
Number of served mouths must correspond to the number of mouths your client has.
Total amount of food must correspond to the amount ordered by your client.
Each next mouth must receive exactly k times more food than the previous.
Examples
serve( 31, 2,   5)      returns [1.0, 2.0, 4.0, 8.0, 16.0]
serve(728, 3,   6)      returns [2.0, 6.0, 18.0, 54.0, 162.0, 486.0]
serve(100, 1.5, 3)      returns [21.053, 31.579, 47.368]
*/
function serve(food, flavour, mouths) {
  let result = Array(mouths).fill(0);
  let start = 0.0;
  if (flavour > 1) {
    start = (food - food * flavour) / (1 - Math.pow(flavour, mouths));
  } else {
    start = food / mouths;
  }
  for (let i = 0; i < mouths; i++) {
    result[i] = start.toFixed(3) * 1;
    start = start * flavour;
  }
  return result;
}
