/*
Description:
The idea for this Kata came from 9gag today.here

You'll have to translate a string to Pilot's alphabet (NATO phonetic alphabet) wiki.

Like this:

Input: If you can read

Output: India Foxtrot Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta

Some notes

Keep the punctuation, and remove the spaces.
Use Xray without dash or space.
*/

function to_nato(words) {
  return words.replace(/\s/g, '').toLowerCase().split('').map(e => NATO[e] ? NATO[e] : e).join(' ');
}
