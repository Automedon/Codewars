/*
Description:
Task
You have found a machine which, when fed with two numbers s and e, produces a strange code consisting of the letters "a" and "b". The machine seems to be using the following algorithm:

step1: Check if s is less than e - 1. If so, continue to step 2. If not, exit.
step2: Increment s by 1, Decrement e by 1
step3: If this is the first letter you're producing, produce `"a"`. 
       Otherwise produce a letter different from the one you last produced 
       (only `"a"` and `"b"` may be produced). go to step 1.```
Your task is to write a function that simulates the workings of the machine.



# Input/Output


`[input]` integer `s`

`4 ≤ s ≤ 20.`

`[input]` integer `e`

`4 ≤ e ≤ 20.`

[output] string

A string of the letters the machine produced.

# Example

For `s = 4 and e = 8`, the output should be `"ab"`.
s e string 4 8 "a" 5 7 "ab" 6 6 exit
*/
function strangeCode(s, e) {
  let str = '';
  let ab = true
  while (s<e-1){
    s++
    e--
      if (ab){
      str+='a'
      ab=false
      } else {
      str+='b'
      ab=true
      }
  }
  return str
}
