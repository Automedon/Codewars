/*
Description:
There are 8 balls numbered from 0 to 7. Seven of them have the same weight. One is heavier. Your task is to find it's number.

Your function findBall will receive single argument - scales object. The scales object contains an internally stored array of 8 elements (indexes 0-7), each having the same value except one, which is greater. It also has a public method named getWeight(left, right) which takes two arrays of indexes and returns -1, 0, or 1 based on the accumulation of the values found at the indexes passed are heavier, equal, or lighter.

getWeight returns:

-1 if left pan is heavier

1 if right pan is heavier

0 if both pans weight the same

Examples of scales.getWeight() usage:

scales.getWeight([3], [7]) returns -1 if ball 3 is heavier than ball 7, 1 if ball 7 is heavier, or 0 i these balls have the same weight.

scales.getWeight([3, 4], [5, 2]) returns -1 if weight of balls 3 and 4 is heavier than weight of balls 5 and 2 etc.

So where's the catch, you may ask. Well - the scales is very old. You can use it only 3 TIMES before the scale breaks.

Too easy? Too hard? Try other levels:

novice
master
*/
function findBall(scales) {
  var w = scales.getWeight([0, 1, 2, 3], [4, 5, 6, 7]);
  if (w < 0) {
    w = scales.getWeight([0, 1], [2, 3]);
    if (w < 0) {
      w = scales.getWeight([0], [1]);
      return w < 0 ? 0 : 1;
    } else {
      w = scales.getWeight([2], [3]);
      return w < 0 ? 2 : 3;
    }
  } else {
    w = scales.getWeight([4, 5], [6, 7]);
    if (w < 0) {
      w = scales.getWeight([4], [5]);
      return w < 0 ? 4 : 5;
    } else {
      w = scales.getWeight([6], [7]);
      return w < 0 ? 6 : 7;
    }
  }
  return -1;
}
