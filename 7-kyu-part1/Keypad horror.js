/*
Description:
Having two standards for a keypad layout is inconvenient!
Computer keypad's layout:
7 8 9  \n
4 5 6  \n
1 2 3  \n
  0 \n

Cell phone keypad's layout:
1 2 3\n 
4 5 6\n  
7 8 9\n  
  0\n

Solve the horror of unstandartized keypads by providing a function that converts computer input to a number as if it was typed by a phone.

Example:
"789" -> "123"

Notes:
You get a string with numbers only
*/

function computerToPhone(numbers) {
  return numbers.replace(/[0-9]/g, v =>
    v == 0
      ? 0
      : v == 7
      ? 1
      : v == 8
      ? 2
      : v == 9
      ? 3
      : v == 1
      ? 7
      : v == 2
      ? 8
      : v == 3
      ? 9
      : v
  );
}
