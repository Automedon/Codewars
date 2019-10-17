/*
Description:
Given 'p' they private key, 'n' the modulus of the public key and the private key, decrypt a message x.

In this instance the message is an integer.

The message has been encrypted with the RSA algorithm.

https://en.wikipedia.org/wiki/RSA_%28cryptosystem%29#Decryption
*/
function decrypt(p, x, n) {
  return Math.pow(n, p) % x;
}
