/*
Description:
When you look at movie ratings, you usually see it as decimal numbers representing average of all viewers' votes. While it is very informative, it's not very visually appealing. That's what stars, or in our case- moons, are created for.

Your task is to transform decimal number rating, which is in range 0-10, into 5-moons scale. Your final rating should be rounded to "0.5" (nearest half moon). Input is always valid.

Write function moonRating which returns valid rating represented as moons ('o','c','x') in single string.
You are given the following values preloaded (remember, since I can't use unicode characters, moons in brackets are here just to improve your imagination):

examples

More examples in test cases.
*/

function moonRating(rating) {
  let a = Math.round(rating);
  if (a === 0) return "xxxxx";
  if (a === 1) return "cxxxx";
  if (a === 2) return "oxxxx";
  if (a === 3) return "ocxxx";
  if (a === 4) return "ooxxx";
  if (a === 5) return "oocxx";
  if (a === 6) return "oooxx";
  if (a === 7) return "ooocx";
  if (a === 8) return "oooox";
  if (a === 9) return "ooooc";
  if (a === 10) return "ooooo";
}
