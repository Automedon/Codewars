/*
Description:
Suppose you have given two number 12 and 10 whose least common multiple(LCM) is 60 and greatest common divisor(GCD) is 2.

In this kata, you are given an object that consist of a number, GCD and LCM. Find the other number.

For example, the function getNum(obj) return 10 where obj = { number1: 12 , gcd: 2 , lcm: 60}.

ALGORITHMSFUNDAMENTALS
*/
function getNum(obj) {
  return (obj.lcm / obj.number1) * obj.gcd;
}
