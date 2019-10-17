/*
Description:
Given two numbers (m and n) :

convert all numbers from m to n to binary
sum them as if they were in base 10
convert the result to binary
return as string
Eg: with the numbers 1 and 4

   1 // 1 to binary is 1
+ 10 // 2 to binary is 10
+ 11 // 3 to binary is 11
+100 // 4 to binary is 100
----
 122 // 122 in Base 10 to Binary is 1111010
So BinaryPyramid ( 1 , 4 ) should return "1111010"

range should be ascending in order
*/
function BinaryPyramid(m,n){
  let arr =[];
  for (let i=m;i<=n;i++){
    arr.push(i);
  }
  return arr.reduce((a,v)=>a+v.toString(2)*1,0).toString(2)
}
