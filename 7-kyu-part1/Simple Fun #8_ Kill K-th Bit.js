/*
Description:
Task
In order to stop the Mad Coder evil genius you need to decipher the encrypted message he sent to his minions. The message contains several numbers that, when typed into a supercomputer, will launch a missile into the sky blocking out the sun, and making all the people on Earth grumpy and sad.

You figured out that some numbers have a modified single digit in their binary representation. More specifically, in the given number n the kth bit from the right was initially set to 0, but its current value might be different. It's now up to you to write a function that will change the kth bit of n back to 0.

Example
For n = 37 and k = 3, the output should be 33.

3710 = 1001012 ~> 1000012 = 3310

For n = 37 and k = 4, the output should be 37.

The 4th bit is 0 already (looks like the Mad Coder forgot to encrypt this number), so the answer is still 37.

Input/Output
[input] integer n

Constraints: 0 ≤ n ≤ 231 - 1.

[input] integer k

The 1-based index of the changed bit (counting from the right).

Constraints: 1 ≤ k ≤ 31.

[output] an integer

More Challenge
Are you a One-Liner? Please try to complete the kata in one line(no test for it) ;-)
*/
function killKthBit(n, k) {
  let binary = n.toString(2);
  let arr = binary.split("");
  arr[arr.length - k] = "0";
  let updatedCode = arr.join("");
  return parseInt(updatedCode, 2);
}
