/*
Description:
Task
Ram lives in a house which is round in shape. The house has n entrances numbered from 1 to n. For each i in range [1..n - 1] entrances i and i + 1 are adjacent. So are entrances 1 and n.

Ram's flat is located at entrance a. Each evening he goes for a walk around the house, counting the entrances he walks by. Today Ram decided to walk until he counts b entrances.

Help Ram to determine the number of the entrance near which he will be at the end of his walk.

Input/Output
[input] integer n

The number of entrances.

1 ≤ n ≤ 200

[input] integer a

The number of the entrance where Ram starts his walk.

1 ≤ a ≤ n

[input] integer b

The number of entrances Ram wants to count.

if b > 0, Ram walks clockwise until he counts b entrances;

if b < 0, Ram walks counterclockwise until he counts |b| entrances;

if b = 0, Ram stays at his entrance and doesn't go anywhere.

-100000 ≤ b ≤ 100000

[output] an integer

The number of the house at the end of his walk.

Example
For n = 6, a = 2 and b = -5, the output should be 3.

Ram will walk counterclockwise around the house, so he will count the entrances as follows: 2->1->6->5->4->3.

For n = 5, a = 1 and b = 3, the output should be 4.

Ram will walk clockwise around the house, counting the entrances as follows: 1->2->3->4.
*/
function roundAndRound(n, a, b) {
  let endDoor = (a + b) % n;

  if (endDoor < 1) endDoor += n;

  return endDoor;
}
