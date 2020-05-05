/*
Description:
An onion array is an array that satisfies the following condition for all values of j and k:

If all of the following are true:

j >= 0
k >= 0
j + k = array.length - 1
j != k
then:

a[j] + a[k] <= 10
Examples:
[1, 2, 19, 4, 5]   =>  true  (as 1+5 <= 10 and 2+4 <= 10)
[1, 2, 19, 4, 10]  =>  false (as 1+10 > 10)
Write a function named isOnionArray/IsOnionArray/is_onion_array() that returns true if its argument is an onion array and returns false if it is not.
*/
function isOnionArray(arr){
  for (let i=0,j=arr.length-1; i<arr.length;i++,j--){
    if (i>=0&&j>=0) {
      if (i+j===arr.length-1){
        if (i!==j){
          if (arr[i]+arr[j]>10) return false
        }
      }
    }
  }
  return true
}
