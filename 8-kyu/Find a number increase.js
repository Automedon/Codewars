/*
Description:
A number increased by 7 equals 22. Write a function that return A number's value. Return null if initial_value or final_value is not a number and when final_value is less than initial_value.
*/
function increaseNumber(initialValue, finalValue) {
  if (
    typeof initialValue !== "number" ||
    typeof finalValue !== "number" ||
    finalValue < initialValue
  )
    return null;
  if (isNaN(initialValue) || isNaN(finalValue)) return null;
  return finalValue - initialValue;
}
