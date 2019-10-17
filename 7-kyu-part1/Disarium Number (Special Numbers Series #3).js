/*
Description:
Definition
Disarium number is the number that The sum of its digits powered with their respective positions is equal to the number itself.

Task
Given a number, Find if it is Disarium or not .

Warm-up (Highly recommended)
Playing With Numbers Series
Notes
Number passed is always Positive .
Return the result as String
Input >> Output Examples
1- disariumNumber(89) ==> return "Disarium !!"
Explanation:
Since , 81 + 92 = 89 , thus output is "Disarium !!"
2- disariumNumber(564) ==> return "Not !!"
Explanation:
Since , 51 + 62 + 43 = 105 != 546 , thus output is "Not !!"
*/

function disariumNumber(n){
  let str=(''+n).split(''),sum=[];
  for (let i=0;i<str.length;i++)
  {
  sum.push(Math.pow(str[i],i+1))
  }
  return sum.reduce((a,b)=>a+(b*1),0)===n?"Disarium !!":"Not !!";
}
