/*Description:
You have to create a function that takes a positive integer number and returns the next bigger number formed by the same digits:

12 ==> 21
513 ==> 531
2017 ==> 2071
If no bigger number can be composed using those digits, return -1:

9 ==> -1
111 ==> -1
531 ==> -1
*/

function nextBigger(n) {
  const sortedDigits = n => ("" + n).split("").sort((a, b) => b - a);
  const max = +sortedDigits(n).join("");
  for (let i = n + 1; i <= max; i++) {
    if (max === +sortedDigits(i).join("")) return i;
  }
  return -1;
}
