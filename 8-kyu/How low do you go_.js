/*
Description:
The doctor has told you that you don't exercise enough and has therefore advised you to start a basic training program in which you exercise 3 times a week. You incorporate push-ups into your schedule and do 5 sets of push-ups 3 times a week.

You are given 3 arrays representing the 5 sets of push-ups over 3 days. Example:

[15, 14, 14, 13, 11], [15, 14, 14, 9, 10], [20, 14, 14, 13, 11].
Your job is to return an array containing the lowest number of reps that you were able to complete on each day. This is because, when you report back to your doctor, you do not want him to know how fit you actually are, because you don't want him to increase your workload. So for the example above, it would be: [11, 9, 11].

The function takes in the arrays as parameters, for those who don't know about arguments here's a link to read up on: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments

Goodluck!
*/
function lowest(a, b, c) {
  return [Math.min(...a),Math.min(...b),Math.min(...c)]
}
