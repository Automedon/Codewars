/*
Description:
Task:
Based on the received dimensions, a and b, of an ellipse, calculare its area and perimeter.

Example:
Input: elipse(5,2)

Output: "Area: 31.4, perimeter: 23.1"
Note: The perimeter approximation formula you should use: π * (3/2(a+b) - sqrt(ab))

Have fun :)
*/
function elipse(a,b){
  let per = Math.round(Math.PI*((3/2)*(a+b)-Math.sqrt(a*b))*10)/10
  let area = Math.round(Math.PI*a*b*10)/10
  return `Area: ${area.toFixed(1)}, perimeter: ${per.toFixed(1)}`
}
