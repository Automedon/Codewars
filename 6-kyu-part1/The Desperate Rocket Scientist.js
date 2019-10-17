/*
Jim, the rocket scientist has finished the code for the board computer of his new Mars rocket. Only one last function is missing, the function for creating the countdown. Because Jim is always nervous when starting a new rocket, he sometimes forgets a number when doing the final countdown from ten to zero, so in order to be sure everything will work perfectly on the great day, he wrote a JavaScript function that does the countdown for him.

Today is rocket launch day, and Jim has a big problem. The unit test for the countdown suddenly fails! Jim could swear that the unit tests were all green yesterday, and that he didn't change anything in the countdown function. He suspects that his assistant Jeff has introduced a bug somewhere in the rocket board computer startup code, but he cannot understand how that could affect the output of his countdown method in such a strange way. Oh, if Jim and Jeff had only learned a bit more JavaScript working on Codewars katas!

Jim is desperate because the countdown function has already been burned into a ROM deep inside the board computer that cannot be easily replaced. He has to fix the problem by calling a method in the startup code that is still accessible. Can you help poor Jim?

Here is Jim's countdown code that he is not able to change any more:

function countdown() {
  var ret = "";
  var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  for (var number in numbers) {
    if (ret) ret += ", ";
    if (number < 10)
      number = 10 - number;
    else if (number == 10)
      number = "Zero";
    ret += number;
  }
  ret += "!";
  return ret;
}
Write a function fix_countdown() that contains a fix to make countdown() work again.
*/
function fix_countdown() {
   delete Array.prototype.Dammit
}
