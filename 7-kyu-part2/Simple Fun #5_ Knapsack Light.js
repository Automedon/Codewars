/*
Description:
Task
You found two items in a treasure chest! The first item weighs weight1 and is worth value1, and the second item weighs weight2 and is worth value2. What is the total maximum value of the items you can take with you, assuming that your max weight capacity is maxW/max_w and you can't come back for the items later?

Example
For value1 = 10, weight1 = 5, value2 = 6, weight2 = 4 and maxW = 8, the output should be

knapsackLight(value1, weight1, value2, weight2, maxW) === 10 (or equivalent for PHP)

You can only carry the first item.

For value1 = 10, weight1 = 5, value2 = 6, weight2 = 4 and maxW = 9, the output should be

knapsackLight(value1, weight1, value2, weight2, maxW) === 16 (or equivalent for PHP)

You're strong enough to take both of the items with you.

For value1 = 10, weight1 = 10, value2 = 6, weight2 = 10 and maxW = 9, the output should be

knapsackLight(value1, weight1, value2, weight2, maxW) === 0 (or equivalent for PHP)

Unfortunately, you're not strong enough to take any one :(

Input/Output
[input] integer value1

Constraints: 2 ≤ value1 ≤ 50.

[input] integer weight1

Constraints: 2 ≤ weight1 ≤ 30.

[input] integer value2

Constraints: 2 ≤ value2 ≤ 50.

[input] integer weight2

Constraints: 2 ≤ weight2 ≤ 30.

[input] integer maxW/max_w

Constraints: 1 ≤ maxW ≤ 50.

[output] an integer
*/
function knapsackLight(value1, weight1, value2, weight2, maxW) {
  if (weight1 + weight2 <= maxW) {
    return value1 + value2;
  }
  if (value1 >= value2) {
    if (weight1 <= maxW) {
      return value1;
    } else if (weight2 <= maxW) {
      return value2;
    }
  } else {
    if (weight2 <= maxW) {
      return value2;
    } else if (weight1 <= maxW) {
      return value1;
    }
  }
  return 0;
}
