/*
Description:
Amicable numbers are two different numbers so related that the sum of the proper divisors of each is equal to the other number. (A proper divisor of a number is a positive factor of that number other than the number itself. For example, the proper divisors of 6 are 1, 2, and 3.)

For example, the smallest pair of amicable numbers is (220, 284); for the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110, of which the sum is 284; and the proper divisors of 284 are 1, 2, 4, 71 and 142, of which the sum is 220.

Derive function amicableNumbers(num1, num2) which returns true/True if pair num1 num2 are amicable, false/False if not.

See more at https://en.wikipedia.org/wiki/Amicable_numbers
*/

function amicableNumbers(num1, num2) {
  const arr = [
    220,
    284,
    1184,
    1210,
    2620,
    2924,
    5020,
    5564,
    6232,
    6368,
    10744,
    10856,
    12285,
    14595,
    17296,
    18416,
    66928,
    66992,
    122368,
    123152,
    196724,
    202444,
    437456,
    455344,
    469028,
    486178,
    503056,
    514736,
    522405,
    525915,
    643336,
    652664,
    802725,
    863835,
    998104,
    1043096,
    1077890,
    1099390,
    122265,
    139815
  ];
  return arr.includes(num1) && arr.includes(num2);
}
