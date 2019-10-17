/*
Description:
The purpose of this Kata is to convey that complex-sounding labels do not necessarily indicate complexity. You may not know how to respond to someone asking you whether you have trypanophobia, but you probably would if the question was whether you were afraid of needles. This description is intentionally vague, in order to force you, against your will, to read and carefully consider its arcane secrets.

Arabic numerals were introduced to Europe by Leonardo Fibonacci in his book Liber Abaci. This introduced the usage of zero, as well as common decimal notation to the West. It is encouraged that you review the evolution of the mathematical concept of numerals as this history is often taken for granted. Before Fibonacci, the Western world didn't advance much in mathematics due in part to the representation of numbers as Roman numerals. E.g. Roman numerals were great for summation, but did not offer the notions of magnitude and scale of fixed-base Arabic numeral variants.

You will complete the provided functions of the ArabicNumerals object.

With the encode function, you will convert a number to a string of Arabic numerals
With the decode function, you will convert a string of Arabic numerals to a number
The type of Arabic numerals you will be encoding is of the European variety
The character "." will be used to signify a decimal point.
Hint: European Arabic Numerals are the kind used in most programming languages to signify numbers.
*/
ArabicNumerals = {
  // accepts a number and returns a string in Arabic Numerals
  encode: function (x) {
   return x+''
  },
  // accepts a string in Arabic numerals and returns a number
  decode: function (x) {
    return x*1
  }
};
