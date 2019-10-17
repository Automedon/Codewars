/*
Description:
Coding 3min : Reading a Book

This is the simple version of Shortest Code series. If you need some challenges, please try the challenge version

Task
John reading a book, When he met a word that he had never read, he will read the word spelling, each letter(not for punctuation,number, only letter) takes 1 second; If he have read the word, he will read the word, each word takes 1 second.

Give you a parameter words(Each word is separated by space)

Return a number that how many seconds John can finish reading.

Example:
sc("Hello World!")=10  
John read all the word spelling.

sc("black cat and white cat all are cat")=24 
John read the 2nd 'cat' and 3rd 'cat' used 2 seconds.

sc("black Cat and white cat all are cat")=24 
'Cat' and 'cat' are same words,your code should ignore the case

words1="Related Articles: Ruby Environment, CoffeeScript Environment, JavaScript Environment, Python Environment, Haskell Environment, Java Environment, Clojure Environment, .NET Environment."
sc(words1)=86

words2="Related Articles: Ruby Environment, Coffee Script Environment, Java Script Environment, Python Environment, Haskell Environment, Java Environment, Clojure Environment, .NET Environment."
sc(words2)=78 
CoffeeScript is one word, Coffee Script are two words
*/
function sc(words) {
  words = words.toLowerCase().replace(/[^a-z ]/g, "").split` `;
  let dif = words.length - [...new Set(words)].length;
  let arr = [...new Set(words)].join``.length;
  return arr + dif;
}
