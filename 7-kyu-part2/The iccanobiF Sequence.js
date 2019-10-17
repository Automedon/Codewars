/*
Your task is to create an array of size n with the values of the Fibonnaci sequence, and reverse the order in which the sequence is displayed.

For example: [1, 1, 2, 3, 5] would become [5, 3, 2, 1, 1]

You can assume that n will always be a positive integer between and including, 1 and 64.

Note: If you receive a server timeout - Check your code and re-run the tests.
*/
function iccanobif(n) {
  if (n==1) return [1]
  let arr =[1,1];
  for (let i=2;i<n;i++)
  {
  arr.push(arr[i-2]+arr[i-1])
  }
  return arr.reverse()
}
