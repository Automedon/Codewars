/*
Description:
The magic sum of 3s is calculated on an array by summing up odd numbers which include the digit 3. Write a function magic_sum which accepts an array of integers and returns the sum.

Example: [3, 12, 5, 8, 30, 13] results in 16 (3 + 13)

If the sum cannot be calculated, 0 should be returned.
*/

function magicSum(numbers) {
  return numbers && Array.isArray(numbers)
    ? numbers.reduce(
        (a, b) =>
          a +
          (b % 2 !== 0 &&
          b
            .toString()
            .split("")
            .includes("3")
            ? b
            : 0),
        0
      )
    : 0;
}
