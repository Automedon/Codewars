/*
Description:
Remove the parentheses
In this kata you are given a string for example:

"example(unwanted thing)example"
Your task is to remove everything inside the parentheses as well as the parentheses themselves.

The example above would return:

"exampleexample"
Other than parentheses only letters and spaces can occur in the string. Don't worry about other brackets like "[]" and "{}" as these will never appear.
*/
function removeParentheses(s) {
  while (s.includes("(")) {
    s = deleteOnce(s);
  }
  return s;
}

const deleteOnce = (s) => {
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      let countP = 1;
      for (let j = i + 1; j < s.length; j++) {
        if (s[j] === "(") {
          countP += 1;
        }
        if (s[j] === ")") {
          countP -= 1;
        }
        if (countP === 0) {
          s = s.slice(0,i)+s.slice(j+1)
          break;
        }
      }
    }
  }
  return s;
};
