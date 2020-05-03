/*
#Binary Search Trees - Create Push #The Problem Write the push function for Binary Search Trees given the following code:

function Node(val){
  this.val = val;
  this.left = null;
  this.right = null;
}

function BinarySearchTree(){
  this.root = null;
}
Note that left nodes will store values less than AND equal to their parents' values in this problem.

#The Data Structure Binary Search Trees (BSTs) are data structures that provide for fast lookup, addition, and removal.

At each Node in the tree, there are three values, the value stored at that node, the left child, and the right child. Each node has a left subchild and right child that are also nodes. Each left child's value is less than the value of it's parent's value and the right child's value is greater than the value of it's parent. Because of this, when traversing the tree from the root node to a specific node, the nodes required to search reduce in half -- thereby performing binary search.

BSTs have the advantage of not needing to reserve more memory than necessary, as would be the case for hashtables or arrays.

##Run Time Analysis Average:

Space: O(n)
Insert: O(log n)
Delete: O(log n)
##Strengths

Store in sorted order
Efficiently support range queries
Efficiently support nearest-neighbor queries
Better worst-case guarantees
More Information on BST Strengths/Applications

#About
*/
function Node(val){
  this.val = val;
  this.left = null;
  this.right = null;
}

function BST(){
  this.root = null;
}

BST.prototype.push = function(val) {
  const  tree = this
  if (!this.root) {
    //why are we creating root? nonsense
    tree.root = new Node(val)  
    return this
  }
  t(this,val)
  return this
}

function t(tree,val){
  if(!tree) return tree;
  //checking nonsense root
  if (tree.root&&!tree.root.left&&val<=tree.root.val){
    return tree.root.left = new Node(val)
  } else if (tree.root&&!tree.root.right&&val>tree.root.val) {
    return tree.root.right = new Node(val)
  } 
  // now we can do normal logic
  if (!tree.left&&val<=tree.val){
    return tree.left = new Node(val)
  } else if (!tree.right&&val>tree.val) {
    return tree.right = new Node(val)
  } 
  // again nonsense root
  tree.root&&tree.root.left&&t(tree.root.left,val)
  tree.root&&tree.root.right&&t(tree.root.right,val)
  //normal traverse
  t(tree.left,val)
  t(tree.right,val)
}
