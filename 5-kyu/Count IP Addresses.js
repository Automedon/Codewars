/*
Description:
Implement a function that receives two IPv4 addresses, and returns the number of addresses between them (including the first one, excluding the last one).

All inputs will be valid IPv4 addresses in the form of strings. The last address will always be greater than the first one.

Examples
ipsBetween("10.0.0.0", "10.0.0.50")  ===   50 
ipsBetween("10.0.0.0", "10.0.1.0")   ===  256 
ipsBetween("20.0.0.10", "20.0.1.0")  ===  246
*/
function ipsBetween(start, end){
  let s = start.split`.`
  let e = end.split`.`
  let [a,b,c,d] = [e[0]-s[0],e[1]-s[1],e[2]-s[2],e[3]-s[3]]
  return a*256*256*256+b*256*256+c*256+d
}
