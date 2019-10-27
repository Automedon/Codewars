/*
Description:
We need a function that receives two arrays arr1 and arr2, each of them, with elements that occur only once. We need to know:

(1) Number of elements that are present in both arrays
(2) Number of elements that are present in only one array
(3) Number of remaining elements after extracting to arr1, the elements that are present in arr2.
(4) Number of remaining elements after extracting to arr2, the elements that are present in arr1.
Explaining the features of this function, let's name it process_2arrays()(ruby and python), process2Arrays()(javascript), we show graphically how it should operate:

process_2arrays(arr1, arr2) == [(1), (2), (3), (4)]  # (data required above)
Let's see some cases:

arr1 = [1, 2 ,3,4, 5 ,6 ,7 ,8 ,9]
arr2 = [2, 4, 6, 8, 10, 12, 14]
process_2arrays(arr1, arr2) --------> [4, 8, 5, 3]

(1) ---> 4 # because the elements present in both arryas are: 2, 4, 6 and 8 (4 values)
(2) ---> 8 # beacause elements present in only one array are: 1, 3, 5, 7, 9, 10, 12, and 14 (8 values)
(3) ---> 5 # elements remaning of arr1 are: 1, 3, 5, 7, 9
(4) ---> 3 # elements remaning of arr2 are: 10, 12, 14
No doubt, an easy kata to warm up before doing the more complex ones. Enjoy it!
*/
function process2Arrays(arr1, arr2) {
  let c1 = [...new Set(arr1)].filter(v => arr2.includes(v)).length;
  let c3 = [...new Set(arr1)].filter(v => !arr2.includes(v)).length;
  let c4 = [...new Set(arr2)].filter(v => !arr1.includes(v)).length;
  let c2 = c3 + c4;
  return [c1, c2, c3, c4];
}
