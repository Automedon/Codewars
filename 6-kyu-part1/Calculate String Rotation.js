/*
Description:
Write a function that receives two strings and returns n, where n is equal to the number of characters we should shift the first string forward to match the second.

For instance, take the strings "fatigue" and "tiguefa". In this case, the first string has been rotated 5 characters forward to produce the second string, so 5 would be returned.

If the second string isn't a valid rotation of the first string, the method returns -1.
Examples:
``` "coffee", "eecoff" => 2 "eecoff", "coffee" => 4 "moose", "Moose" => -1 "isn't", "'tisn" => 2 "Esham", "Esham" => 0 "dog", "god" => -1 ```
For Swift, your function should return an Int?. So rather than returning -1 when the second string isn't a valid rotation of the first, return nil.

shiftedDiff("coffee", "eecoff") => 2
shiftedDiff("eecoff", "coffee") => 4
shiftedDiff("moose", "Moose") => nil
shiftedDiff("isn't", "'tisn") => 2
shiftedDiff("Esham", "Esham") => 0
shiftedDiff("dog", "god") => nil

*/
function shiftedDiff(first,second){
  for (let i=0;i<first.length;i++){
    if (first===second) return i;
    first=rotLeft(first, first.length-1)
  }
  return -1
}
function rotLeft(arr, n) {
     let arrTemp = arr.split(``)
     for (let i = 0; i < n; i++) {
         let temp = arrTemp.shift()
        arrTemp.push(temp)
     }
    return arrTemp.join(``)
}
