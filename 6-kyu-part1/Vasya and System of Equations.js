/*
Description:
Vasya isn't really good at math. However, he wants to get a good mark for the class. So he made a deal with his teacher. "I wil study very hard and will be able to solve any given problem!" - Vasya said.

Finally, today is the time to show what Vasya achieved. He solved the given task immediately. Can you?

Task:
You are given a system of equations:



In JS, C# and Java the parameters of the system: 1 ≤ n, m ≤ 1000

You should count, how many there are pairs of integers (a, b) (0 ≤ a, b) which satisfy the system.

Examples
solution(9,3) // => 1
solution(14,28) // => 1
solution(4,20) // => 0
*/
function solution(n, m){
   let count = 0
   for (let i=0;i<n;i++){
     for (let j=0;j<m;j++){
       if (i*i+j===n&&i+j*j===m) count++
     }
   }
   return count
}
