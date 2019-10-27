/*
Description:
{a, e, i, o, u, A, E, I, O, U}

Natural Language Understanding is the subdomain of Natural Language Processing where people used to design AI based applications have ability to understand the human languages. HashInclude Speech Processing team has a project named Virtual Assistant. For this project they appointed you as a data engineer (who has good knowledge of creating clean datasets by writing efficient code). As a data engineer your first task is to make vowel recognition dataset. In this task you have to find the presence of vowels in all possible substrings of the given string. For each given string you have to return the total number of vowels.

Example
Given a string "baceb" you can split it into substrings: b, ba, bac, bace, baceb, a, ac, ace, aceb, c, ce, ceb, e, eb, b. The number of vowels in each of these substrings is 0, 1, 1, 2, 2, 1, 1, 2, 2, 0, 1, 1, 1, 1, 0; if you sum up these number, you get 16 - the expected output.

Note: your solution should have linear time complexity.
*/
function vowelRecognition(input) {
  let count = 0,
    vowels = ["a", "e", "i", "o", "u"];
  let formatInput = input.toLowerCase();
  for (let letterPosition in formatInput) {
    if (vowels.includes(formatInput[letterPosition])) {
      count +=
        formatInput.length -
        letterPosition +
        letterPosition * (formatInput.length - letterPosition);
    }
  }
  return count;
}
