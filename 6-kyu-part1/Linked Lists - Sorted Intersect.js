/*
Description:
Linked Lists - Sorted Intersect

Write a SortedIntersect() function which creates and returns a list representing the intersection of two lists that are sorted in increasing order. Ideally, each list should only be traversed once. The resulting list should not contain duplicates.

var first = 1 -> 2 -> 2 -> 3 -> 3 -> 6 -> null
var second = 1 -> 3 -> 4 -> 5 -> -> 6 -> null
sortedIntersect(first, second) === 1 -> 3 -> 6 -> null
*/
function Node(data) {
  this.data = data === undefined ? null : data;
  this.next = null;
}

function sortedIntersect(f,s,a=[]){
  if (!f||!s) return [...new Set(a.reverse())].reduce((head,data)=>push(head,data),null)
  if (f.data===s.data) return a.push(f.data) && sortedIntersect(f.next,s.next,a)
  return f.data < s.data ? sortedIntersect(f.next,s,a) : sortedIntersect(f,s.next,a)
}
