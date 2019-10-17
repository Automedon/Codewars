/*
This Kata is intended as a small challenge for my students

All Star Code Challenge #25

You've been on your computer for hours...
You are one with the console...
You THINK you need to eat, but you're not sure what time it is...
(You are too far removed from reality to look at an analog clock or your cellphone)

Create a function called currentTime() that returns a string of the current time.

The output should be formatted as such: "The current time is H:M:S"

currentTime() // => 'The current time is 15:51:37'
Note:

Hours should be on the scale of 0-23
There should be no padding with zeroes.
(hint use a Date object)
*/
function currentTime() {
  let min = new Date().getMinutes();
  let hour = new Date().getHours();
  let sec = new Date().getSeconds();
  return `The current time is ${hour}:${min}:${sec}`;
}
