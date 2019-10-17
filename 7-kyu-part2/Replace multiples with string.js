/*
Description:
In this Kata you need to will need to write two methods.

Method 1
The first method takes in a valid int (positive or negative) and returns the following:

for any multiple of 3 the string "THREE",
for any multiple of 5 the string "FIVE",
for any multiple of both the string "BOTH",
for all other numbers the original int.
Method 2
The second method takes two integers (a and b) as inputs and returns an array which is the result of the above method applied to each value in range from a to b.

Note the inputs can be negative, and the first value may be greater than or less than the second and the list should increment/decrement appropriately

For example an input of 10,13 should generate a response of ['FIVE', 11, 'THREE', 13].

Remarks
*/
function getNumber(number) {
  if (number % 15 == 0) return "BOTH";
  else if (number % 3 == 0) return "THREE";
  else if (number % 5 == 0) return "FIVE";
  else return number;
}

function getNumberRange(first, last) {
  var result = [],
    incr = last < first ? -1 : 1;
  for (var n = first; n != last + incr; n += incr) result.push(getNumber(n));
  return result;
}
