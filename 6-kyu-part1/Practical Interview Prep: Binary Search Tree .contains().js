/*
Binary Search Trees - Create .contains
The Problem
The contains function will check whether a value exists inside the binary search tree.
Write the contains function for Binary Search Trees given the following code:

function Node(val){
  this.val = val;
  this.left = null;
  this.right = null;
}

function BST(){
  this.root = null;
}
NOTE: this problem uses the left child if a value is equal

The Data Structure
Binary Search Trees (BSTs) are data structures that provide for fast lookup, addition, and removal.

At each node in the tree, there are three values: the value stored at that node, the left child, and the right child. Each node has a left and a right child that are also nodes. Each left child's value is less than the value of its parent's value and the right child's value is greater than the value of its parent. Because of this, when traversing the tree from the root node to a specific node, the nodes required to search reduce in half -- thereby performing binary search.

BSTs have the advantage of not needing to reserve more memory than necessary, as would be the case for hashtables or arrays.

Run Time Analysis
Average:
Space: O(n)
Search: O(log n)
Insert: O(log n)
Delete: O(log n)

Strengths
Store in sorted order
Efficiently support range queries
Efficiently support nearest-neighbor queries
Better worst-case guarantees
More Information on BST Strengths/Applications
*/
function Node(val){
   this.val = val;
   this.left = null;
   this.right = null;
}

function BST(){
  this.root = null;
}

 
 BST.prototype.contains = function(val){
   const obj = JSON.stringify(this)
   return obj.indexOf(val)!==-1
 }
