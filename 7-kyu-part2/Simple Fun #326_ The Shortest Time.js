/*
Description:
Task
John is a programmer. He treasures his time very much. He lives on the n floor of a building. Every morning he will go downstairs as quickly as possible to begin his great work today.

There are two ways he goes downstairs: walking or taking the elevator.

When John uses the elevator, he will go through the following steps:

1. Waiting the elevator from m floor to n floor;
2. Waiting the elevator open the door and go in;
3. Waiting the elevator close the door;
4. Waiting the elevator down to 1 floor;
5. Waiting the elevator open the door and go out;
(the time of go in/go out the elevator will be ignored)
Given the following arguments:

n: An integer. The floor of John(1-based).
m: An integer. The floor of the elevator(1-based).
speeds: An array of integer. It contains four integer [a,b,c,d]
        a: The seconds required when the elevator rises or falls 1 floor
        b: The seconds required when the elevator open the door
        c: The seconds required when the elevator close the door
        d: The seconds required when John walks to n-1 floor
Please help John to calculate the shortest time to go downstairs.

Example
For n = 5, m = 6 and speeds = [1,2,3,10], the output should be 12.

John go downstairs by using the elevator:

1 + 2 + 3 + 4 + 2 = 12

For n = 1, m = 6 and speeds = [1,2,3,10], the output should be 0.

John is already at 1 floor, so the output is 0.

For n = 5, m = 4 and speeds = [2,3,4,5], the output should be 20.

John go downstairs by walking:

5 x 4 = 20
*/
function shortestTime(n, m, speeds) {
  if (n === 1) return 0;
  let t = Math.abs(m - n) * speeds[0];
  let open = speeds[1];
  let close = speeds[2];
  let floors = n - 1;
  let elevator = floors * speeds[0] + open + close + t + open;
  let walk = (n - 1) * speeds[3];
  return elevator <= walk ? elevator : walk;
}
