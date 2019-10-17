/*
Description:
Introduction
Mr. Safety loves numeric locks and his Nokia 3310. He locked almost everything in his house. He is so smart and he doesn't need to remember the combinations. He has an algorithm to generate new passcodes on his Nokia cell phone.
postimage

Task
Can you crack his numeric locks? Mr. Safety's treasures wait for you. Write an algorithm to open his numeric locks. Can you do it without his Nokia 3310?

Input
The str or message (Python) input string consists of lowercase and upercase characters. It's a real object that you want to unlock.

Output
Return a string that only consists of digits.
Example
``` unlock("Nokia") // => 66542 unlock("Valut") // => 82588 unlock("toilet") // => 864538 ```
*/
function unlock(str) {
  str = str.toLowerCase();
  let code = "";
  const cypher = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz"
  };
  for (let i = 0; i < str.length; i++) {
    for (let j in cypher) {
      if (cypher[j].indexOf(str[i]) !== -1) code += j;
    }
  }
  return code;
}
