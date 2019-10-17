/*
Description:
You've just recently been hired to calculate scores for a Dart Board game!

Scoring specifications:

0 points - radius above 10
5 points - radius between 5 and 10 inclusive
10 points - radius less than 5
If all radiuses are less than 5, award 100 BONUS POINTS!

Write a function that accepts an array of radiuses (can be integers and/or floats), and returns a total score using the above specification.

An empty array should return 0.

Examples:
scoreThrows( [1, 5, 11] )    =>  15
scoreThrows( [15, 20, 30] )  =>  0
scoreThrows( [1, 2, 3, 4] )  =>  140
*/
function scoreThrows(r){
  if (r.length===0) return 0
  let score=0;
  for (let i=0;i<r.length;i++){
  
    if (r[i]>=5&&r[i]<=10)score+=5
    if (r[i]<5)score+=10
    
  }
  if (r.every(v=>v<5)) score+=100
  return score
}
