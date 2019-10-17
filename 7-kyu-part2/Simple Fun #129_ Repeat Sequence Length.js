/*
Description:
Task
let F(N) be the sum square of digits of N. So:

F(1) = 1, F(3) = 9, F(123) = 14

Choose a number A, the sequence {A0, A1, ...} is defined as followed:

  A0 = A
  A1 = F(A0)
  A2 = F(A1) ...
if A = 123, we have:

  123 → 14(1 x 1 + 2 x 2 + 3 x 3)
      → 17(1 x 1 + 4 x 4)
      → 50(1 x 1 + 7 x 7)
      → 25(5 x 5 + 0 x 0)
      → 29(2 x 2 + 5 x 5)
      → 85(2 x 2 + 9 x 9)
      → 89(8 x 8 + 5 x 5)             ---
      → 145(8 x 8 + 9 x 9)             |r
      → 42(1 x 1 + 4 x 4 + 5 x 5)      |e
      → 20(4 x 4 + 2 x 2)              |p
      → 4(2 x 2 + 0 x 0)               |e
      → 16(4 x 4)                      |a
      → 37(1 x 1 + 6 x 6)              |t
      → 58(3 x 3 + 7 x 7)              |
      → 89(5 x 5 + 8 x 8)             --- 
      → ......
As you can see, the sequence repeats itself. Interestingly, whatever A is, there's an index such that from it, the sequence repeats again and again.

Let G(A) be the minimum length of the repeat sequence with A0 = A.

So G(85) = 8 (8 number : 89,145,42, 20,4,16,37,58)

Your task is to find G(A) and return it.

Input/Output
[input] integer a0

the A0 number

[output] an integer

the length of the repeat sequence
*/
function repeatSequenceLen(a0) {
  let arr=a0
  let check  = [];
  for (let i=0;;i++){
    arr=arr.toString().split``.map(v=>v*1*v*1).reduce((a,b)=>a+b*1,0)
      if (check.includes(arr.toString())){
      check.push(arr.toString())
      break
    }
    check.push(arr.toString())
  }
  return check.slice(check.indexOf(check[check.length-1])).length-1
}
