/*
Description:
"console.log" and the Lexical "this"
Disclaimer
The author of this Kata, donaldsebleung, has no affiliation whatsoever with Codecademy or any other external websites mentioned in the description of this Kata.

Overview
Have you ever completed a (Javascript) lesson on Codecademy where you had to console.log a value to the screen (e.g. "Hello World"), only to think about it carefully after completing the lesson/exercise and wonder, "Just how do the people there at Codecademy check if you have logged the correct value to the console?" If you actually think about it, it's not as intuitive as it first seems:

console.log does not have a return value (i.e. it just returns undefined regardless of the value passed in) so the people there at Codecademy cannot just check for something like console.log("Hello World") === "Hello World"
Even if console.log had a return value, how could they possibly check for that return value? It's not like the value returned by console.log (if there was one) is stored in any variable (e.g. in their exercise they don't ask you to do something like this: var lemmeCheckThis = console.log("Hello World"))
However, after thinking through this carefully, I think I may have figured out one possible way they could have done this - they could have defined a global variable not known to the user and redefined or altered the console.log function so that whenever it is called, apart from printing to the screen, the value(s) passed in is saved into that global variable. They can then easily check for the value passed in by checking the value of the global variable. How smart is that?

Task
In this Kata, we will do this a bit differently than described above. Redefine console.log such that whenever it is called, the value passed into the function is also saved into this.answer where this is the environment in which the function itself is defined and executed, NOT the environment of the function itself. This way, we can effortlessly check if the user has logged the correct value to the console. One rule though - you will have to literally set the value of this.answer directly inside your function (there will be regex tests to check this) so make sure that your this (inside your function) is referring to the correct thing ;)

You may also find this article useful. Good luck and happy coding :D
*/
const console2 = console.log;
console.log = input => {
  this.answer = input;
  console2(input);
};
