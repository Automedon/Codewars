/*
Description:
Write a function generateIntegers/generate_integers that accepts two arguments m/$m and n/$n and generates an array containing the integers from m to n inclusive.

For example, generateIntegers(2, 5)/generate_integers(2, 5) should return [2, 3, 4, 5].

m/$m and n/$n can be any integers greater than or equal to 0.

n/$n will always be greater than or equal to m/$m.
*/
function generateIntegers(m, n) {
  const arr = [];
  for (let i = m; i <= n; i++) {
    arr.push(i);
  }
  return arr;
}
