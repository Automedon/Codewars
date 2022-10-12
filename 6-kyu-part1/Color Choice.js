/*
Description:
You know combinations: for example, if you take 5 cards from a 52 cards deck you have 2,598,960 different combinations.

In mathematics the number of x combinations you can take from a set of n elements is called the binomial coefficient of n and x, or more often n choose x. The formula to compute m = n choose x is: m = n! / (x! * (n - x)!) where ! is the factorial operator.

You are a renowned poster designer and painter. You are asked to provide 6 posters all having the same design each in 2 colors. Posters must all have a different color combination and you have the choice of 4 colors: red, blue, yellow, green. How many colors can you choose for each poster?

The answer is two since 4 choose 2 = 6. The combinations will be: {red, blue}, {red, yellow}, {red, green}, {blue, yellow}, {blue, green}, {yellow, green}.

Now same question but you have 35 posters to provide and 7 colors available. How many colors for each poster? If you take combinations 7 choose 2 you will get 21 with the above formula. But 21 schemes aren't enough for 35 posters. If you take 7 choose 5 combinations you will get 21 too. Fortunately if you take 7 choose 3 or 7 choose 4 combinations you get 35 and so each poster will have a different combination of 3 colors or 5 colors. You will take 3 colors because it's less expensive.

Hence the problem is:

knowing m (number of posters to design), knowing n (total number of available colors), let us search x (number of colors for each poster so that each poster has a unique combination of colors and the number of combinations is exactly the same as the number of posters).

In other words we must find x such as n choose x = m (1) for a given m and a given n; m >= 0 and n > 0. If many x are solutions give as result the smallest x. It can happen that when m is given at random there are no x satisfying equation (1) then return -1.

Examples:
checkchoose(6, 4) --> 2
checkchoose(4, 4) --> 1
checkchoose(4, 2) --> -1
checkchoose(35, 7) --> 3
checkchoose(36, 7) --> -1

a = 47129212243960
checkchoose(a, 50) --> 20
checkchoose(a + 1, 50) --> -1
*/
function checkchoose(m, n) {
  let x = 1;
  for (let i = 1; i < n; i++) {
    x = Math.round((x * (n + 1 - i)) / i);
    if (x == m) return i;
  }
  return -1;
}
