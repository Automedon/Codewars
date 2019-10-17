/*
Description:
Implement a function, multiples(m, n), which returns an array of the first m multiples of the real number n. Assume that m is a positive integer.

Ex.

multiples(3, 5)
should return

[5, 10, 15]
*/
function multiples(m, n){
  const arr=[];
  for (let i=1;i<=m;i++){
  arr.push(n*i)
  }
  return arr
}
