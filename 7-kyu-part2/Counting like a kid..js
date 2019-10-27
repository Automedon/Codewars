/*
Description:
My best friend has an adorable 3 year old kid. Everytime I go to visit them, she wants to impress me by showing off her counting skill. Up till now, she is able to count up to n. However, there is a problem with her counting: she always forgets even numbers. Your task in this kata is to be able to count like her. For convenience let's put the numbers she is able to count in an array. Good luck mate!

When 0 is passed in, return [].

Example:

kidoCount(10) => should return [1,3,5,7,9]
kidoCount(9) => should return [1,3,5,7,9]
kidoCount(0) => should return []
*/
function kidoCount(n) {
  let arr = [];
  for (let i = 1; i <= n; i += 2) arr.push(i);
  return arr;
}
