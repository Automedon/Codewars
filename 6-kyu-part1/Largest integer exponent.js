/*
Description:
Write a method named getExponent(n,p) that returns the largest integer exponent x such that px evenly divides n. if p<=1 the method should return null/None (throw an ArgumentOutOfRange exception in C#).
*/
function getExponent(n,p){
   if (p < 2) return null
    for (let i=0;;){
      if (n%p===0) {
        i++
        n/=p
      }
      else return i
    }
}
