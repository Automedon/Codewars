/*
What is the most asked question on CodeWars?

Can someone explain /*...*/?

You need to write a function detect that will check if a string starts with Can someone explain, case sensitive. Return true if so, false otherwise.

Let's hope you don't write a solution that makes people ask that question at you!
*/
function detect(comment) {
  return comment.startsWith(`Can someone explain`)
}
