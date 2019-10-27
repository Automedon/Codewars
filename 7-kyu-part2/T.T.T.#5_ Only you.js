/*
Description:
They say that only the name is long enough to attract attention. They also said that only a simple Kata will have someone to solve it. series #5:
Only you

Rules
Please determine if the string s is "only you":

1) The string should contains "you". Such as "only you","I love you","Nice to meet you";

2) "you" can be discontinuous. Such as "y o u","y@o#u","yaobu";

3) "you" should ignore case. Such as "You","YOU","YoU".

4) The string should NOT contains "I","me","he","him","they","them","we". They MUST be continuous, but ignore the case.

If the string s conforms to the above condition, returns true; otherwise, returns false.

Some examples:
```
onlyYou("you") should return true
onlyYou("YoU") should return true
onlyYou("y o u") should return true
onlyYou("yxoxu") should return true
onlyYou("only you") should return true
onlyYou("I love you") should return false
onlyYou("I hate you") should return false
onlyYou("Do you love me?") should return false
onlyYou("we trust you") should return false
onlyYou("you hit him") should return false
onlyYou("I love youtube") should return false
```
*/
function onlyYou(s) {
  s = s.replace(/[^\w]/g, "");
  if (/I|me|he|him|they|them|we/gi.test(s)) return false;
  s = s.replace(/[^you]/gi, "");
  if (/y(.*?)o(.*?)u/gi.test(s)) return true;
  return false;
}
