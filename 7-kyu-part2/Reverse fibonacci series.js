/*
Description:
Write a function to generate 'n' number of fibonacci series (0,1,1,2,3...) in reverse order . The output should be a string of fibonacci series in the reverse order upto the given number.

eg.

reverseFibo(3)  // => '110'
reverseFibo(10) // => '3421138532110'
*/
function reverseFibo(n) {
  let arr = [0, 1];
  for (let i = 1; i < n - 1; i++) {
    arr.push(arr[i - 1] + arr[i]);
  }
  return arr.reverse().join(``);
}
