/*
Description:
You are given a string which needs to be translated into a secret code. Write a function called translate which takes a string and translates it into 'secret code'.

Examples:

translate('Whatsup') --> 'hwatsup'

translate('dOgCat') --> 'dgoact'

translate('heYadam') --> 'heaydam'
Please do not test this with spaces in the string.
*/
function translate(str) {
  str = str.split``;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      let temp = str[i];
      str[i] = str[i + 1];
      str[i + 1] = temp.toLowerCase();
    }
  }
  return str.join``.toLowerCase();
}
