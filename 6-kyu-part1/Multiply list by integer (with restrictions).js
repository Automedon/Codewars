/*
Description:
Task:
Given a list of integers l, return the list with each value multiplied by integer n.
Restrictions:
The code must not:
contain *.
use eval() or exec()
contain for
modify l
Happy coding :)
*/
function multiply(n, l) {
  return l.map(a => Math.round(a / (1 / n)));
}
