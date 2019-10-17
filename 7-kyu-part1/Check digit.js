/*
Description:
In this Kata, you will be given a number, two indexes (index1 and index2) and a digit to look for. Your task will be to check if the digit exists in the number, within the indexes given.

Be careful, the index2 is not necessarily more than the index1.

  index1 == 2 and index2 == 5 -> snippet from 2 to 5 positons;
  index1 == 5 and index2 == 2 -> snippet from 2 to 5 positons;

  number.length = 14;

  0 <= index1 < 14;

  0 <= index2 < 14;

  index2 is inclusive in search snippet;

  0 <= digit <= 9;
Find more details below:


  checkDigit(12345678912345, 1, 0, 1) -> true, 1 exists in 12

  checkDigit(12345678912345, 0, 1, 2) -> true, 2 exists in 12

  checkDigit(67845123654000, 4, 2, 5) -> true, 4 exists in 845

  checkDigit(66688445364856, 0, 0, 6) -> true, 6 exists in 6

  checkDigit(87996599994565, 2, 5, 1) -> false, 1 doesn't exist in 9965
*/
function checkDigit(number, index1, index2, digit) {
  if (index1 > index2) {
    [index1, index2] = [index2, index1];
  }
  return ("" + number).slice(index1, index2 + 1).indexOf("" + digit) > -1;
}
