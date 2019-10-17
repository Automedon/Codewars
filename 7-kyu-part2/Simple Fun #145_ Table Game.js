/*
Task
Alireza and Ali have a 3×3 table and playing on that. they have 4 table(2×2) A,B,C and D in this table.

At beginning all of 9 numbers in 3×3 table is zero.

Alireza in each move choose a 2×2 table from A, B, C and D and increase all of 4 numbers in that by one.

He asks Ali, how much he increase table A, B, C and D. (if he cheats you should return [-1])

Your task is to help Ali.

Example
For

 table=
[[1,2,1],
[2,4,2],
[1,2,1]]```
The result should be `[1,1,1,1]`

 For:
Table= [[3,7,4], [5,16,11], [2,9,7]]``` The result should be [3,4,2,7]

Input/Output
[input] 2D integer array table

3×3 table.

[output] an integer array
*/
function tableGame(t) {
  const t1=t[0][0], t2=t[0][1],t3=t[0][2],
        t4=t[1][0], t5=t[1][1],t6=t[1][2],
        t7=t[2][0], t8=t[2][1],t9=t[2][2];
  if (
   t2-t1-t3===0&&
   t4-t1-t7===0&&
   t8-t7-t9===0&&
   t6-t3-t9===0&&
   t5-t4-t6===0
  )
    return [t1,t3,t7,t9]
  else
    return [-1]
}
