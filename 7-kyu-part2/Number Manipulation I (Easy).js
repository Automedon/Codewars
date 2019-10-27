/*
Description:
For a given large number (num), write a function which returns the number with the second half of digits changed to 0.

In cases where the number has an odd number of digits, the middle digit onwards should be changed to 0.

Example:

192827764920 --> 192827000000

938473 --> 938000

2837743 --> 2830000
*/
function manipulate(num) {
  let str = "" + num;
  return (
    (str.slice(0, str.length / 2) +
      str.slice(str.length / 2).replace(/\d/g, "0")) *
    1
  );
}
