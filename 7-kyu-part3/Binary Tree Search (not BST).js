/*
Given a number and a binary tree ( not a Binary Search Tree! ):

return True/true if the given number is in the tree
return False/false if it isn't
Each node in the binary tree is either of this Node class or null:

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}
*/

function search(n, root) {
  return!!JSON.stringify(root).replace(/\D/g,' ').trim().replace(/\s+/g,':').split(':').filter(v=>v==n).length;
}
