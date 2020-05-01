/*
Description:
Write a class that, when given a string, will return an uppercase string with each letter shifted forward in the alphabet by however many spots the cipher was initialized to.

For example:

var c = new CaesarCipher(5); // creates a CipherHelper with a shift of five
c.encode('Codewars'); // returns 'HTIJBFWX'
c.decode('BFKKQJX'); // returns 'WAFFLES'
If something in the string is not in the alphabet (e.g. punctuation, spaces), simply leave it as is.
The shift will always be in range of [1, 26].


*/
var CaesarCipher = function (shift){ 
  const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  this.encode = (str)=>{
    return str.toLowerCase().replace(/[a-z]/g,v=>{
      return alphabet[Math.abs((alphabet.indexOf(v)+shift)%26)]
    }).toUpperCase()
  }
  this.decode = (str)=>{
    return str.toLowerCase().replace(/[a-z]/g,v=>{
      if ((alphabet.indexOf(v)-shift)<0) return alphabet[26+(alphabet.indexOf(v)-shift)]
      return alphabet[(alphabet.indexOf(v)-shift)]
    }).toUpperCase()
  }
  return this
};
