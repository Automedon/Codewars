/*
Task
How many strings equal to A can be constructed using letters from the string B? Each letter can be used only once and in one string only.

Example
For A = "abc" and B = "abccba", the output should be 2.

We can construct 2 strings A with letters from B.

Input/Output
[input] string A

String to construct, A contains only lowercase English letters.

Constraints: 3 ≤ A.length ≤ 9.

[input] string B

String containing needed letters, B contains only lowercase English letters.

Constraints: 3 ≤ B.length ≤ 50.

[output] an integer
*/
function stringsConstruction(A, B) {
  let count = 0;
  A = A.split("").sort((a, b) => a.localeCompare(b));
  B = B.split("")
    .sort((a, b) => a.localeCompare(b))
    .filter(v => A.includes(v));
  const obj2 = {};
  A.map(v => (obj2[v] = obj2[v] ? obj2[v] + 1 : 1));
  const obj = {};
  B.map(v => (obj[v] = obj[v] ? obj[v] + 1 : 1));
  let arr1 = Object.values(obj);
  const arr2 = Object.values(obj2);
  if (arr1.length !== arr2.length) return 0;
  if (arr1.length === 0) return 0;
  for (let i = 0; ; i++) {
    if (arr1.every(v => v > 0)) {
      for (let j = 0; j < arr1.length; j++) {
        arr1[j] -= arr2[j];
      }
      if (arr1.every(v => v >= 0)) {
        count++;
      }
    } else {
      break;
    }
  }
  return count;
}
