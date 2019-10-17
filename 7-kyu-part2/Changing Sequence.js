/*
Description:
This challenge requires you to determine at what index in an array the sequence changes from increasing to decreasing or vice versa. For example, if the array were [1, 2, 4, 6, 4, 3, 1] then your program should return 3 because at index 3 the sequence begins to change from increasing to decreasing. If there is no change in sequence, then your program should return -1.

To solve this challenge, we'll loop through the array checking if each change between numbers matches the prior change. We do this until we reach a point in the array where the sequence changes.
*/
function changingSequence(arr){
  if (arr[0]>arr[1]){
  for (let i=0;i<arr.length-1;i++){
    if (arr[i]<arr[i+1]) return i
  }
  }  
  for (let i=0;i<arr.length-1;i++){
    if (arr[i]>arr[i+1]) return i
  }
  return -1
}
