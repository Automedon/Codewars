/*
Hofstadter sequences are a family of related integer sequences, among which the first ones were described by an American professor Douglas Hofstadter in his book Gödel, Escher, Bach. Task
Today we will be implementing the rather chaotic recursive sequence of integers called Hofstadter Q.

The Hofstadter Q is defined as:


As the author states in the aforementioned book:


It is reminiscent of the Fibonacci definition in that each new value is a sum of two previous values-but not of the immediately previous two values. Instead, the two immediately previous values tell how far to count back to obtain the numbers to be added to make the new value.
The function produces the starting sequence:
1, 1, 2, 3, 3, 4, 5, 5, 6 . . .

Test info: 100 random tests, n is always positive

Good luck!
*/
function hofstadterQ(n) {
  let arr = [ 1, 1 ];
  let i = arr.length;
  while ( i < n ) {
      arr.push(arr[i-arr[i-1]] + arr[i-arr[i-2]]);
      i++;
  }
  return arr[n-1];
}
