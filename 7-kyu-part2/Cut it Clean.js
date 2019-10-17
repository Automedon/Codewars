/*
In front of you there's a rope of length len. Your task is to cut the rope into n pieces of "equal" length.

Return an array of each piece's length. Order is NOT important.

Requirements:

Each piece should be an integer (rounded to 0dp).
The difference between each piece should be diff <= 1.
Example:

cut(100, 2) => [50, 50]
cut(100, 3) => [33, 33, 34]   // [33, 34, 33] and [34, 33, 33] are also acceptable
Constraints:

rope length len is: integer
number of pieces num is: integer
num <= len
*/
var cut = function(len, num) {
  let arr = [];
  let temp=0
  for (let i=1;i<=num;i++){
    arr.push(Math.floor(len/num))
    temp+=(len/num)%1
    if (temp>=1){
      temp--
      arr[i-1]++
    }
  }
  if (arr.reduce((a,b)=>a+b,0)!==len) arr[0]++
  return arr;
}
