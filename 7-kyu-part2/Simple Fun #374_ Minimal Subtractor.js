/*
Description:
Task
You are given an positive integer n. You can do the following operation:

Choose a subtractor k(k>=0)
Then n = (n - k) / 2
......
......
......
......
Until n decrease to 1
Your task is to find the minimal subtractor, so that n can decrease to 1.

Still not understand the task? Look at the following example ;-)

Example
For n = 16, the output should be 0

16 -> (16-0)/2 -> (8-0)/2 -> (4-0)/2 -> (2-0)/2 -> 1
Also, 4 and 14 are valid subtractor:

16 -> (16-4)/2 -> (6-4)/2 -> 1
16 -> (16-14)/2 -> 1
But they are larger than 0.

For n = 15, the output should be 1

15 -> (15-1)/2 -> (7-1)/2 -> (3-1)/2 -> 1
For n = 14, the output should be 12

14 -> (14-12)/2 -> 1
Note
3 <= n <= 1000

n = (n - k) / 2 is ONE operation. It can not split to TWO operations n = n - k, then n = n / 2.

After each n = (n - k) / 2 operation, n should be an integer.

Happy Coding ^_^
*/
function minimalSubtractor(n){
  let k=n.toString().slice()*1
  let i=0;
    while(true){
      if (n===1) return i
      if (n<1) {i++;n=k;}
      if (i>k) {break}
      n=(n-i)/2
    }
}
