/*
Description:
PUZZLE #1. SUM

Assignment:

Write a function named sum which performs addition in the way shown below

sum(4)(5)(9)(); // => 18
sum(5)();       // => 5
sum();          // => 0
```ruby sum(4).(5).(9).() #=> 18 sum(5).() #=> 5 sum() #=> 0

NOTE: Pay attention that last brackets are left empty to indicate end of operations

Thanks to @JohanWiltink, @donaldsebleung
*/
function sum(x){
  if (x===undefined) return 0
  return (y)=>{
    if (y===undefined) return x
    return sum(x+y)
  }
}
