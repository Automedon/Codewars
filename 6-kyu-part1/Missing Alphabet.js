/*
Description:
In this Kata you have to create a function,named insertMissingLetters,that takes in a string and outputs the same string processed in a particular way.

The function should insert only after the first occurence of each character of the input string, all the alphabet letters that:

-are NOT in the original string
-come after the letter of the string you are processing

Each added letter should be in uppercase, the letters of the original string will always be in lowercase.

Example:

input: "holly"

missing letters: "a,b,c,d,e,f,g,i,j,k,m,n,p,q,r,s,t,u,v,w,x,z"

output: "hIJKMNPQRSTUVWXZoPQRSTUVWXZlMNPQRSTUVWXZlyZ"

You don't need to validate input, the input string will always contain a certain amount of lowercase letters (min 1 / max 50).
*/
function insertMissingLetters(str) {
  let uniq = [...new Set(str.split``)].join``;
  let arr = [];
  let dict = "abcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < uniq.length; i++) {
    arr.push(
      uniq[i] +
        dict
          .slice(dict.indexOf(uniq[i]))
          .replace(new RegExp(`[${uniq}]`, "gi"), "")
          .toUpperCase()
    );
  }
  let str2 = str.slice();
  for (let i = 0; i < uniq.length; i++) {
    str2 = str2.replace(new RegExp(uniq[i]), arr[i]);
  }
  return str2;
}
