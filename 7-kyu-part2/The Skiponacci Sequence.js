/*
Description:
Your task is to generate the Fibonacci sequence to n places, with each alternating value as "skip". For example:

"1 skip 2 skip 5 skip 13 skip 34"

Return the result as a string

You can presume that n is always a positive integer between (and including) 1 and 64.
*/
function skiponacci(n) {
  if (n === 1) return '1'
  let arr = [1,1]
  for (let i = 0; i < n - 2; i++) {
    arr.push(arr[i] + arr[i+1])
  }
  return arr.map((v,i) => (i+1) % 2 === 0 ? 'skip' : v).join` `
}
