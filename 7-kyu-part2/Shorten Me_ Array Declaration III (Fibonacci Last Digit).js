/*
Description:
Shorten Me: Array Declaration III (Fibonacci Last Digit)
Task
You have to write an array() function returning an array object with elements as follow:

[ 1, 1, 2, 3, 5, 8, 3, 1, 4, 5, 9, 4, 3,
  7, 0, 7, 7, 4, 1, 5, 6, 1, 7, 8, 5, 3,
  8, 1, 9, 0, 9, 9, 8, 7, 5, 2, 7, 9, 6 ]
Coding Limitation:
Less than 70 characters
*/
array = _ => {
  for (i = 1, a = [1, 1]; i < 38; i++) a.push((a[i - 1] + a[i]) % 10);
  return a;
};
