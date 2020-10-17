/*
Description:
Task
Create a RomanNumerals class that can convert a roman numeral to and from an integer value. It should follow the API demonstrated in the examples below. Multiple roman numeral values will be tested for each helper method.

Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

Examples
RomanNumerals.toRoman(1000); // should return 'M'
RomanNumerals.fromRoman('M'); // should return 1000
Help
| Symbol | Value | |----------------| | I | 1 | | V | 5 | | X | 10 | | L | 50 | | C | 100 | | D | 500 | | M | 1000 |
*/
const RomanNumerals = {
  toRoman: (number) => {
    let result = "",
      decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
      roman = [
        "M",
        "CM",
        "D",
        "CD",
        "C",
        "XC",
        "L",
        "XL",
        "X",
        "IX",
        "V",
        "IV",
        "I",
      ];

    decimals.map(function (value, index) {
      while (number >= value) {
        result += roman[index];
        number -= value;
      }
    });

    return result;
  },
  fromRoman: (roman) => {
    const conversion = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    };
    return roman
      .match(/CM|CD|XC|XL|IX|IV|\w/g)
      .reduce((accum, roman) => accum + conversion[roman], 0);
  },
};
