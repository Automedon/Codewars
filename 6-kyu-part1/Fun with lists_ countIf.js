/*
Description:
Implement the method countIf (count_if in PHP), which accepts a linked list (head) and a predicate function, and returns the number of elements which apply to the given predicate.

For example: Given the list: 1 -> 2 -> 3, and the predicate x => x >= 2, countIf / count_if should return 2, since x >= 2 applies to both 2 and 3.

The linked list is defined as follows:

function Node(data, next = null) {
  this.data = data;
  this.next = next;
}
Note: the list may be null and can hold any type of value.

Good luck!
*/
function countIf(head, p) {
  let count = 0;
  while (head) {
    if (p(head.data)) count++;
    head = head.next;
  }
  return count;
}
