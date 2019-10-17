/*
Description:
By getting an array of numbers, you'll need to identify the multiples of 2 and 3.

Basics, when you get a multiple of 2, you must return a string "Well". When you get a multiple of 3, you must return a string "Done". And of course, when you get a multiple of 2 and 3, you must return "Well Done".

Ps. Numbers that do not correspond don't needs to add anything.

The output must be an array of strings.

Input Example [2,3,5,6] Output Exemple ["Well", "Done", "Well Done"]
*/
function multiplus(array) {
  let arr = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 3 === 0 && array[i] % 2 === 0) arr.push("Well Done");
    else if (array[i] % 3 === 0) arr.push("Done");
    else if (array[i] % 2 === 0) arr.push("Well");
  }
  return arr;
}
