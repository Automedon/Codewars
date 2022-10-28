/*
Description:
For a given string s find the character c with longest consecutive repetition and return a tuple (c, l) (in Haskell Just (Char, Int), in C# Tuple<char?, int>, in Shell a String of comma-separated values c,l, in JavaScript [c,l], in Ruby [c, l], in Groovy [c, l]) where l is the length of the repetition. If there are two or more characters with the same l return the first.
For empty string return ('', 0) (in Haskell Nothing, in C# Tuple<char, int>(null, 0), in Shell ,0, in JavaScript ["",0], in Ruby ["", 0], in Groovy ["", 0]).

Happy coding! :)
*/
function longestRepetition(s) {
  let str = "";
  let count = 1;
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      count++;
    } else {
      if (arr.every(v => v < count)) {
        str = s[i] + count;
      }
      arr.push(count);
      count = 1;
    }
  }
  return !str ? ["", 0] : [str.slice(0, 1), str.slice(1) * 1];
}
