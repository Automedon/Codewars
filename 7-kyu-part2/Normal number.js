/*
A normal number is defined to be one that has no odd factors, except for 1 and possibly itself. Write a method named isNormal that returns true if its integer argument is normal, else false. If the input is less than one return false as well.
*/
function isNormal(n){
if (n<=0) return false
 let arr = [];
 for (let i=1;i<n;i++){
   if (n%i===0) arr.push(i)
 }
 arr = arr.filter(v=>v%2!==0)
 arr.push(n)
 return arr.length<3
}
