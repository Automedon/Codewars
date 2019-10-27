/*
Description:
There are five workers : James,John,Robert,Michael and William.They work one by one and on weekends they rest. Order is same as in the description(James works on mondays,John works on tuesdays and so on).You have to create a function 'task' that will take 3 arguments(w, n, c):

1) Weekday

2) Number of trees that must be sprayed on that day

3) Cost of 1 litre liquid that is needed to spray tree,let's say one tree needs 1 litre liquid.

Let cost of all liquid be x

Your function should return string like this : 'It is (weekday) today, (name), you have to work, you must spray (number) trees and you need (x) dollars to buy liquid'

For example:

task('Monday',15,2) -> 'It is Monday today, James, you have to work, you must spray 15 trees and you need 30 dollars to buy liquid'
*/
function task(w, n, c) {
  return `It is ${w} today, ${
    w === "Wednesday"
      ? "Robert"
      : w === "Monday"
      ? "James"
      : w === "Friday"
      ? "William"
      : w === "Tuesday"
      ? "John"
      : "Michael"
  }, you have to work, you must spray ${n} trees and you need ${n *
    c} dollars to buy liquid`;
}
