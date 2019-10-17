/*
Description:
Create a function that rounds a number n to p decimal places and returns it as a string.

For example:
Round(1.56881,4)==>"1.5688"
Round(0.3333,2)==> "0.33"
*/
function Round(n,p){
  return n.toFixed(p)
}
