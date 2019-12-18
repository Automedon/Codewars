/*
Description:
A list of integers is sorted in “Wave” order if alternate items are not less than their immediate neighbors (thus the other alternate items are not greater than their immediate neighbors).

Thus, the array [4, 1, 7, 5, 6, 2, 3] is in Wave order because 4 >= 1, then 1 <= 7, then 7 >= 5, then 5 <= 6, then 6 >= 2, and finally 2 <= 3.

The wave-sorted lists has to begin with an element not less than the next, so [1, 4, 5, 3] is not sorted in Wave because 1 < 4

Your task is to write the function waveSort() that takes a list of integers and sorts it into wave order, your function shouldn't return anything.

Note:

The resulting array shouldn't necessarily match anyone in the tests, a function just checks if the array is now wave sorted.
*/
function waveSort(arr) {
  arr = arr.sort((a,b)=>a-b)
  for (let i = 0; i < arr.length; i += 2) {
    const curr = arr[i]
    if (i > 0) {
      const prev = arr[i - 1]
      if (prev > curr) {
        arr[i - 1] = curr
        arr[i] = prev
      }
    }
    if (i < arr.length - 1) {
      const next = arr[i + 1]
      if (curr < next) {
        arr[i] = next
        arr[i + 1] = curr
      }
    }
  }
}
