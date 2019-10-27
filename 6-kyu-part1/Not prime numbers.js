/*
Description:
You are given two positive integers a and b (a < b <= 20000). Complete the function which returns a list of all those numbers in the interval [a, b) whose digits are made up of prime numbers (2, 3, 5, 7) but which are not primes themselves.

Be careful about your timing!

Good luck :)
*/
let arr = ["2", "3", "5", "7"];
let ans = [];
let heheboi = () => {
  for (let i = 0; i < 20000; i++) {
    if (i.toString().split``.every(v => arr.includes(v)) && !isPrime(i))
      ans.push(i);
  }
};
heheboi();
function notPrimes(a, b) {
  if (a > ans[ans.length - 1]) return [];
  let min = ans.findIndex((v, i) => v >= a);
  if (b > ans[ans.length - 1]) return ans.slice(min);
  let max = ans.findIndex((v, i) => b <= v);
  return ans.slice(min, max);
}
function isPrime(n) {
  let rt = Math.sqrt(n);
  for (let i = 2; i <= rt; i++) {
    if (n % i === 0) return false;
  }
  return n !== 1;
}
