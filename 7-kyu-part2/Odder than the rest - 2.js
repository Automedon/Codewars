/*
Description:
Some integral numbers are odd. All are more odd, or less odd, than others.

Even numbers satisfy n = 2m ( with m also integral ) and we will ( completely arbitrarily ) think of odd numbers as n = 2m + 1. Now, some odd numbers can be more odd than others: when for some n, m is more odd than for another's. Recursively. :]
Even numbers are always less odd than odd numbers, but they also can be more, or less, odd than other even numbers, by the same mechanism.

Task
Given a non-empty finite list of unique integral ( not necessarily non-negative ) numbers, determine the number that is odder than the rest. Given the constraints, there will always be exactly one such number.

Examples
oddest([1,2]) => 1
oddest([1,3]) => 3
oddest([1,5]) => 5
Hint
Do you really want one? Point or tap here.
*/
function oddest(a) {
  let arr = a.map(x => [...(x >>> 0).toString(2)].reverse());
  return a[arr.reduce((i, a, b) => a > arr[i] ? b : i, 0)];
}
