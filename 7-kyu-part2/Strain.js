/*
Description:
Implement the keep and discard operation on collections. Given a collection and a predicate on the collection's elements, keep returns a new collection containing those elements where the predicate is true, while discard returns a new collection containing those elements where the predicate is false.

Write two functions that each take a function and a list. One of them will return the list of items for which the passed in function is true, and the other will return the items for which it is false.

For example, given the collection of numbers:

1, 2, 3, 4, 5
And the predicate:

is the number even?
Then your keep operation should produce:

2, 4
While your discard operation should produce:

1, 3, 5
Note that the union of keep and discard is all the elements.

Restrictions
Keep your hands off that Enum module functionality provided by your standard library (filter/reject/reduce/whatchamacallit)! Solve this one yourself using other basic tools instead.
*/
let strain = {
  keep(array, fn) {
    return array.filter(v => fn(v));
  },
  discard(array, fn) {
    return array.filter(v => !fn(v));
  }
};
