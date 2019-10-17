/*
Description:
They say that only the name is long enough to attract attention. They also said that only a simple Kata will have someone to solve it. series #3:
Three lifts

Task
There are three lifts in a building: A, B and C. Lift A only stays on the odd floor; Lift B only stays on the even floor(floor1 is an exception); Lift C stays on each floor. When someone presses the lift button, the nearest lift will move to the person's floor.

Now, someone pressed the lift button, please judge which lift will move?

You will coding in function ```switchLift```. parameter 1: object ```status```, contains three number values, it means the current floor of the three lifts; parameter 2: number ```n```, it means lift button has been pressed at floor n. The return value should be a string, such as ```"A","B","C"```.

The following examples will help you to understand how to solve this kata.
Some examples:
```
switchLift({A:1,B:1,C:10},3) should return "A"
```
Because lift A needs move up 2 floor; lift B never stay on floor 3;
lift C needs move down 7 floor. So the lift A is the best choice.
```
switchLift({A:1,B:1,C:10},4) should return "B"
switchLift({A:1,B:1,C:10},5) should return "A"
switchLift({A:1,B:1,C:10},6) should return "C"

switchLift({A:1,B:1,C:9},5) should return "AC"
```
Because lift A and lift C both need move 4 floor. 
So lift A and lift C  will move at the same time.
```
switchLift({A:1,B:2,C:10},6) should return "BC"

switchLift({A:1,B:1,C:9},1) should return ""
```
Because there are two lifts have been parked there, 
so any lift does not need to move.
```
switchLift({A:5,B:4,C:6},1) should return "B"
```
When n=1, because the three lifts are able to reach the floor 1, so should return the nearest of three lifts.
*/
function switchLift(status,n){
  let str=''
  let arr= Object.entries(status).map(v=>Math.abs(v[1]-n))
  if (arr.some(v=>v===0)) return ''
  if (n%2===0) str+='B'
   if (n%2!==0) str+='A'
   if (arr[2]<arr[1]&&n%2===0||arr[2]<arr[0]&&n%2!==0) return 'C'
  if (arr[2]===arr[1]||arr[2]===arr[0]) str+='C'
  if (n===1) {
    let arr2= Object.entries(status)
    let index=arr2.findIndex(v=>v[1]===Math.min(...arr2.map(v=>v[1])))
    return arr2[1][0]
  }
  return str
}
