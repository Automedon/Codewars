/*
Description:
Series: bit “Wise”

Javascript’s bitwise operators are probably the least used and least widely understood part of the language: In the domain of the web, where Javascript enjoys unrivaled supremacy, operating on the bits-and-bytes level is often abstracted away (perhaps thankfully). Despite this, there remain practical uses for the language’s bitwise operators both on the web (for performance reasons) and especially in the burgeoning field of physical computing (Arduino, RaspberryPi, etc.), where Javascript is being embedded in and interacting with things like sensor packages, shift registers and other electronic components that “speak binary”. In this series of Kata, we’ll familiarize ourselves with some of the “basic moves” of the JS bitwise operators.
Exercise 2: SHIFT-iness
One of the tricky things about (x).toString(2) (where x is an integer, which reports the number back in binary) is that it doesn't really tell us the "whole story" about how JS is handling the bits for any given number. You learn this very quickly when you apply the "~" bitwise operator to an integer.
For Example:

console.log((5).toString(2)); 
logs "101" to the console...which is what you expect, right?

So "flipping" the bits on the number with the "~" operator should yield 010 - or 2, right? Let's see:

console.log(~5); 
-6!? -6?! WTF?

Well, there's a reason for that. The binary representation of numbers in JS is handled in the "Two's Complement" system...which is just a fancy way of saying that for any given set of bits, the first bit represents the sign (0 for positive, 1 for negative) of the number and the rest of the bits represent the "absolute value" of the number according to the following simple formula: A) For positive numbers and 0, the value tells how "far" from 0 the number is... i.e. 10 in binary (2 in decimal) means "2 above 0"...so for a 3-bit number in Two's Complement, the number 2 (decimal) would be represented as: "010". B) For negative numbers, how far above the smallest possible value that can be represented with the number of bits available...e.g. with three bits, the smallest possible number we can represent is -4...so "101" (binary) is like saying "01 more than -4"...or -3.

So in the example above, when we "flipped" the bits of the number 5, there was the extra "sign bit" on the front that got flipped as well.. so what we thought was "101" was actually "0101" and when we flipped the bits, we got "1010" - i.e. "Two more than the smallest number possible in this many bits" == "Two more than -8" == "-6".

Here are all the possible 2's complement numbers in a 3-bit system: (binary == decimal)
011 == 3
010 == 2
001 == 1
000 == 0
111 == -1
110 == -2
101 == -3
100 == -4

Now the problem; Extend the Number prototype with a function called "twos" that accepts one parameter (n), and when called, returns the two's-complement representation of the number in "n" bits in a string.

e.g.

(-2).twos(3) == "110";
(8).twos(5) == "01000";
(-8).twos(5) == "11000";
(-16).twos(5) == "10000";
*/
Number.prototype.twos = function(n) {
  let ret = "";
  while (n) {
    ret += (this >> --n) & 1;
  }
  return ret;
};
