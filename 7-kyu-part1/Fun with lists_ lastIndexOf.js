/*
Description:
Implement the method lastIndexOf (last_index_of in PHP), which accepts a linked list (head) and a value, and returns the index (zero based) of the last occurrence of that value if exists, or -1 otherwise.

For example: Given the list: 1 -> 2 -> 3 -> 3, and the value 3, lastIndexOf / last_index_of should return 3.

The linked list is defined as follows:

function Node(data, next = null) {
  this.data = data;
  this.next = next;
}
Note: the list may be null and can hold any type of value.

Good luck!
*/
function lastIndexOf(head, value) {
  let count = 0, current = head;
  let arr=[]
  while(current !== null) {
    arr.push(current.data)
    current = current.next;
    count++;
  }
  return arr.lastIndexOf(value);
}
