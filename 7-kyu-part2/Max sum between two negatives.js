/*
Description:
You have a list of integers. The task is to return the maximum sum of the elements located between two negative elements, or if there is no such sum: -1 for Python and JavaScript, Nothing for Haskell.

No negative element should be present in this sum.

Example:

[4, -1, 6, -2, 3, 5, -7, 7] -> 8
     ^      ^         ^
Not 14, because -2 is between -1 and -7, and not 6 but 8, because 8 is bigger.
*/

function maxSumBetweenTwoNegatives(a) {
  const onlyNeg = a.filter(v=>v<0)
  if(onlyNeg.length<2){
    return -1
  }
  const arr = []
  for (let i=0;i<a.length;i++){
    if(a[i]<0){
      let count = 0
      for(let j=i+1;j<a.length;j++){
        if(a[j]<0){
          arr.push(count)
          break
        }
        else {
          count += a[j]
        }
      }
    }
  }
  return Math.max(...arr)
}
