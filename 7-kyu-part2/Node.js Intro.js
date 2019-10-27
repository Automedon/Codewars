/*
Description:
JavaScript (and CoffeeScript by extension) is a language that is heavily dependent on a run-time environment. While most people learn JS in a browser environment, there are other environemnts that run outside of a browser. Codewars runs your code in a *Node.js* environment.

This kata is an attempt to introduce the NodeJS environment.

Environment Differences
The runtime environment gives your code the ability to interact with software outside of the language itself. For example, a browser environment has several built-ins that let you interact with a webpage. You can use functions like getElementById or XMLHttpRequest.

Node.js, however, cannot use those browser-specific built-ins (go ahead, try). Node.js is an environment for javascript that is meant to run on your computer (server-side). So while you lose the ability to work with browser built-ins, you gain access to NodeJS-specific code.

Kata
We are going to replicate the kata Base64 Encoding, but instead of creating our own encoding / decoding functions, we will use NodeJS' Buffer module to do it for us.

Create the function String.prototype.toBase64 that encodes a string in Base64. Also create the function String.prototype.fromBase64 that decodes a Base64 string into utf8.

Examples
// should return 'dGhpcyBpcyBhIHN0cmluZyEh'
'this is a string!!'.toBase64(); 

// should return 'this is a string!!'
'dGhpcyBpcyBhIHN0cmluZyEh'.fromBase64();
Tips
To use a NodeJS module, you need to require it into your code. For example, if I wanted to use the util module, I could write

//require the 'util' module into your code
var util = require('util')
console.log(util.isRegExp(/hi/)) 
The NodeJS built-in function require knows exactly how to find the module, so no extra work is needed. After you have required a module into your code, you can use any of the methods / properties for it.

The NodeJS documentation is helpful, so I suggest you look at that. If you plan on working with NodeJS at all in the future, it is beneficial to know what features it has built-in.
*/
String.prototype.toBase64 = function() {
  return Buffer.from(this).toString("base64");
};

String.prototype.fromBase64 = function() {
  return Buffer.from(this, "base64").toString();
};
