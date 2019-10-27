/*
Description:
##Task:

When humanity is taking its first steps to reaching the stars, they need to add a meter-light year converter in their starships. Since it can be a pain to convert meters to light-years in your head, you need to write a function to do that. Note: The goal is not to perform the division(that would be too easy), it's to figure out the conversion factor or somehow hack the ly function.

const lightYear = meters =>
*/
const lightYear = function(meters) {
  return meters/9460730472580800
}
