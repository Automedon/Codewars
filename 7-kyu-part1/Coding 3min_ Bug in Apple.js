/*
Description:
Coding 3min: Bug in Apple

This is the simple version of Shortest Code series. If you need some challenges, please try the challenge version.

#Task:
Find out "B"(Bug) in a lot of "A"(Apple). 

There will always be one bug in apple, not need to consider the situation that without bug or more than one bugs.

input: string Array ```apple```

output: Location of "B", ```[x,y]```
##Series:

Bug in Apple
Father and Son
Jumping Dutch act
Planting Trees
Give me the equation
Find the murderer
Reading a Book
Eat watermelon
Special factor
Guess the Hat
Symmetric Sort
Are they symmetrical?
Max Value
Trypophobia
Virus in Apple
Balance Attraction
Remove screws I
Remove screws II
Regular expression compression
Collatz Array(Split or merge)
Tidy up the room
Waiting for a Bus
*/

function sc(apple) {
  for (i = 0; i < apple.length; i++)
    for (j = 0; j < apple[i].length; j++) {
      if (apple[i][j] == "B") return [i, j];
    }
  return null;
}
