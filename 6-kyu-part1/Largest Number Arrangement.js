/*
Description:
Create a function that takes a list of one or more non-negative integers, and arranges them such that they form the largest possible number.

Examples:

largestArrangement([4, 50, 8, 145]) returns 8504145 (8-50-4-145)

largestArrangement([4, 40, 7]) returns 7440 (7-4-40)

largestArrangement([4, 46, 7]) returns 7464 (7-46-4)

largestArrangement([5, 60, 299, 56]) returns 60565299 (60-56-5-299)

largestArrangement([5, 2, 1, 9, 50, 56]) returns 95655021 (9-56-5-50-21)
*/
const largestArrangement = array => {
  return array.map(String).sort((a,b)=>(b+a).localeCompare(a+b)).join``*1
}
