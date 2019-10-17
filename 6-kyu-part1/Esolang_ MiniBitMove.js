/*
Description:
Task:
This kata asks you to make a custom esolang interpreter for the language [MiniBitMove](http://esolangs.org/wiki/MiniBitMove). MiniBitMove has only two commands and operates on a array of bits. It works like this:
1: Flip the bit at the current cell
0: Move selector by 1
It takes two inputs, the program and the bits in needs to operate on. The program returns the modified bits. The program stops when selector reaches the end of the array. Otherwise the program repeats itself. Note: This means that if a program does not have any zeros it is an infinite loop

Example of a program that flips all bits in an array:

Code: 10
Bits: 11001001001010
Result: 00110110110101
After you're done, feel free to make translations and discuss this kata.
*/
function interpreter(tape, array) {
  array = array.split``;
  for (let i = 0; i < array.length; ) {
    for (let j = 0; j < tape.length; j++) {
      if (tape[j] === "1")
        array[i] = array[i].replace(/[01]/, v => (v === "0" ? "1" : "0"));
      if (tape[j] === "0") {
        i++;
      }
      if (array[i] === undefined) break;
    }
  }
  return array.join``;
}
