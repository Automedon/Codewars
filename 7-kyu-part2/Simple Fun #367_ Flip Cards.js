/*
Description:
Task
Here are 7 cards on the table. We named them C1 to C7.

The two sides of each card are X and O. Now, the 7 cards are on the table, we don't know the details of each card (imagine your eyes are covered).

All you know is that three of the cards X side face up, and four cards O side face up.

Your task is to divide them into two groups, so that each group of cards has the same number of X.

You can choose to flip or not flip any card. For example, if you want flip card1, you can put "C1.flip" into your result. Otherwise, just put "C1" into your result.

That is, your result should be an 2D array, each subarray should contains some cards' name. i.e. [["C1","C2.flip","C3.flip","C4"]["C5","C6","C7"]]

Still not understand the task? Look at the example testcases;-)

Note
This kata is a puzzle.

Thinking is more important than coding ^_^
*/
function flipCards(){
  return [["C1","C2","C3","C4"],["C5.flip","C6.flip","C7.flip"]] 
}
