/*
Description:
You are given a binary tree, where every node points to a head of an integer linked list. Implement the method flatten which returns a sorted linked list from the values of all the lists, without duplicates.

For example, given the following tree:

    17->1
   /  \
  3    1
 /    / \
2    16  7->3
The method should return 1 -> 2 -> 3 -> 7 -> 16 -> 17.

The classes TreeNode & ListNode are available for you:

function TreeNode(value, left, right) {
  this.value = value;
  this.left = left;
  this.right = right;
};

function ListNode(data, next = null) {
  this.data = data;
  this.next = next;
};
*/
function flatten(root) {
  let arr = JSON.stringify(root).match(/\-?\d+/g);
  if (arr) {
    arr = [...new Set(arr.map(Number))].sort((a, b) => a - b);
    const head = new ListNode(arr.shift());
    let node = head;
    while (arr.length) {
      node.next = new ListNode(arr.shift());
      node = node.next;
    }

    return head;
  }
  return arr;
};
