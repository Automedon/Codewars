/*
Description:
Aliens have landed on earth. They speak an Alien version of English. So you can communicate with them, write a function which translates an English sentence to the language of the Aliens using these rules:

Double all vowels (a,e,i,o,u)
Reverse the order of the letters in each word
All characters must be in lowercase
*/
function translateToAlienLanguage(string) {
  return string
    .toLowerCase()
    .split(` `)
    .map(v =>
      v
        .split(``)
        .reverse()
        .join(``)
        .replace(/([aeiou])/g, "$1$1")
    ).join` `;
}
