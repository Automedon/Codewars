/*
Description:
Vasya has a very limited amount of free time. During these precision minutes he likes to think about strings containing zeros and ones.

Vasya considers the following operation: he chooses any two adjacent positions in the string, and if one of them contains 0, and the other contains 1, then we are allowed to remove these two digits from the string.

Now Vasya thinks of what is the minimum length of the string that can remain after applying the described operation several times (possibly, zero)? Help him to calculate this number.

###Input First line of the input contains a single integer n, (1 ≤ n ≤ 500000), the length of the string Vasya has. The second line contains the string of length n consisting only from zeros and ones.

###Output Output the minimum length of the string that may remain after applying the described operations several times.

###Examples:

Task.ResultString(4, "1100") // answer is 0 =>  sequence of the possible steps: 1100 --> 10 --> empty string

Task.ResultString(5, "01010") // answer is 1 =>  sequence of the possible steps: 01010 --> 010 --> 0

Task.ResultString(8, "11101111") // answer is 6 =>  sequence of the possible steps: 11101111 --> 111111
*/

const CalculateString = (_, s) => {
  while (/01|10/.test(s)) s = s.replace(/01|10/g, '');
  return s.length;
}
