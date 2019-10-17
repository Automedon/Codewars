/*
Betsy's recently taken a test and she is just about to get her results. Her school have an online system where each student will recieve a message telling them whether they've passed or failed.

Complete the function to give the 3 strings str1, str2, str3 the correct values to ensure that each student recieves the right message. 70 is the pass mark, so create a function that uses this grade boundary and returns either:

"Sorry, you have failed. Better luck next time!"
or

"Congratulations, you have passed!"
Whether they pass or fail, both strings end with this string:

"Thank you for taking part."
Things to note:

The grade boundary is 70 and is inclusive with the score of 70 considered a pass.
You can use the String .concat() method or any other method you see fit to bring the strings together.
Scores cannot be lower than 0 and will always be given as a number
*/
function getRes(myScore) {
  return myScore >= 70
    ? "Congratulations, you have passed! Thank you for taking part."
    : "Sorry, you have failed. Better luck next time! Thank you for taking part.";
}
