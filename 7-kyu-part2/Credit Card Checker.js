/*
Description:
#Description Write a function that checks whether a credit card number is correct or not, using the Luhn algorithm.

The algorithm is as follows:

From the rightmost digit, which is the check digit, moving left, double the value of every second digit; if the product of this doubling operation is greater than 9 (e.g., 8 × 2 = 16), then sum the digits of the products (e.g., 16: 1 + 6 = 7, 18: 1 + 8 = 9) or alternatively subtract 9 from the product (e.g., 16: 16 - 9 = 7, 18: 18 - 9 = 9).
Take the sum of all the digits.
If the total modulo 10 is equal to 0 (if the total ends in zero) then the number is valid according to the Luhn formula; else it is not valid.
The input is a string with the full credit card number, in groups of 4 digits separated by spaces, i.e. "1234 5678 9012 3456"
Don´t worry about wrong inputs, they will always be a string with 4 groups of 4 digits each separated by space.

##Examples

         valid_card?("5457 6238 9823 4311") # -> true
         valid_card?("5457 6238 9323 4311") # -> false
for reference check: https://en.wikipedia.org/wiki/Luhn_algorithm
*/
const validCard = card => !(card.split(/\s*/).map((c, i) => c * (i % 2? 1 : 2)).map(d => d > 9? d - 9 : d).reduce((a, b) => a + b) % 10)
