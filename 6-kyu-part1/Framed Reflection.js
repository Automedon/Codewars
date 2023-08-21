/*
Description:
100th Kata
You are given a message (text) that you choose to read in a mirror (weirdo). Return what you would see, complete with the mirror frame. Example:

'Hello World'

would give:


Words in your solution should be left-aligned.
*/

function mirror(text) {
  let stars = Math.max(...text.split` `.map(v => v.length)) + 4;
  let space = Math.max(...text.split` `.map(v => v.length));
  let arr = text.split` `.map(
    v =>
      "\n* " +
      v.split(``).reverse().join`` +
      " ".repeat(space - v.length) +
      " *\n"
  ).join``.replace(/\*\n\n\*/g, "*\n*");
  return "*".repeat(stars) + arr + "*".repeat(stars);
}
