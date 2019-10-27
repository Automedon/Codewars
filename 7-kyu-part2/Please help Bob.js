/*
Description:
Description
In English we often use "neutral vowel sounds" such as "umm", "err", "ahh" as fillers in conversations to help them run smoothly.

Bob always finds himself saying "err". Infact he adds an "err" to every single word he says that ends in a consonant! Because Bob is odd, he likes to stick to this habit even when emailing.

Task
Bob is begging you to write a function that adds "err" to the end of every word whose last letter is a consonant (not a vowel, y counts as a consonant).

The input is a string that can contain upper and lowercase characters, some punctuation but no numbers. The solution should be returned as a string.

NOTE: If the word ends with an uppercase consonant, the following "err" will be uppercase --> "ERR".

eg:

"Hello, I am Mr Bob" --> "Hello, I amerr Mrerr Boberr"

"THIS IS CRAZY!"  --> "THISERR ISERR CRAZYERR!"
Good luck!
*/
function errBob(string) {
  return string.split(` `).map(v => {
    if (!/\w/.test(v[v.length - 1])) {
      if (!/[auioe]/i.test(v[v.length - 2])) {
        return v[v.length - 2] === v[v.length - 2].toUpperCase()
          ? v.slice(0, -1) + "ERR" + v.slice(-1)
          : v.slice(0, -1) + "err" + v.slice(-1);
      }
    } else if (/\w/.test(v[v.length - 1])) {
      if (!/[auioe]/i.test(v[v.length - 1])) {
        return v[v.length - 1] === v[v.length - 1].toUpperCase()
          ? v + "ERR"
          : v + "err";
      }
    }
    return v;
  }).join` `;
}
