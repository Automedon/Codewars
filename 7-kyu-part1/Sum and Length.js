/*
Description:
Sum and Length
In this kata you must return a string value, where the first part is the sum of positive numbers and the second part is the number of negative numbers.
Knowing that the first '0' is negative, the second is positive etc...


For example :
sumLength([-1,2,3,4,0,1,0,-2,0,-3])
return '10 5' (10 = 1 + 2 + 3 + 4 and 5 = 3 + 2 => 3 negatives numbers + second 0 as negative)
*/
function sumLength (arr){
		const pos=arr.filter(v=>v>0).reduce((a,b)=>a+b,0);
    const neg1=arr.filter(v=>v<0).length;
    const neg2=Math.ceil(arr.filter(v=>v===0).length/2);
  return `${pos} ${neg1+neg2}`;
}
