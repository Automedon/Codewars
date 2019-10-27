/*
Description:
Create a function mostLikely which compares two probabilities, returning true if the first one is most likely otherwise false.

For this exercise probability is expressed as two numbers separated by a colon e.g. a probability of 1 in 3 will be 1:3.

So:

mostLikely('1:3','1:2') will return false as 1 in 3 is less likely than 1 in 2.
*/
function mostLikely(prob1, prob2) {
  let p1 = prob1.split(":");
  let sum1 = p1[0] / p1[1];
  let p2 = prob2.split(":");
  let sum2 = p2[0] / p2[1];
  return sum1 > sum2;
}
