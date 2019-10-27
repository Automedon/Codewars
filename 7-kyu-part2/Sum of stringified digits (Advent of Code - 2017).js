/*
Given a sequence of stringified digits, find the sum of all digits that match the next digit in the list. The list is circular, so the digit after the last digit is the first digit in the list.

'1122' produces a sum of 3.

'1111' produces 4.

'1234' produces 0.

'91212129' produces 9.

CREDIT:https://adventofcode.com/2017/day/1
*/
function sumOfString(sequence) {
  sequence = sequence.split("");
  sequence = [...sequence].concat(sequence[0]);
  let i, a, b, c;
  c = [];
  for (i = 0; i < sequence.length - 1; i++) {
    if (sequence[i] === sequence[i + 1]) {
      c.push(sequence[i]);
    }
  }
  return c.reduce((a, b) => a + parseInt(b), 0);
}
