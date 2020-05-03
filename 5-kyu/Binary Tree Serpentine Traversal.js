/*
Description:
Given the root node of a binary tree, write a function that will print the tree in a serpentine fashion. You could also think of this as a zig-zag.

We want to print the first level from left to right, the second level from right to left, third level from left to right, and so on... You cannot assume that this tree is balanced or a binary search tree. It is very important that you start the first level from left to right!

A Node has the following properties:

var data; // A number or string.
Node left; // Undefined if there is no left child.
Node right; // Undefined if there is no right child.
Example:
Let's say we have 7 Nodes.

var a = new Node("A");
var b = new Node("B");
var c = new Node("C");
var d = new Node("D");
var e = new Node("E");
var f = new Node("F");
var g = new Node("G");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;
c.right = g;
Then, serpentineTree(a) should return ["A", "C", "B", "D", "E", "F", "G"]

Tip: Drawing this tree out on paper may be helpful.*/
function serpentineTree(node)
{ 
  const left = {}
  dfs(node,left)
  return Object.values(left).reduce((arr,val,i)=>arr.concat(i%2?val.reverse():val),[])
}

function dfs(node,obj,d=0){
  if (!node) return;
  if (!obj[d]) obj[d]=[]
  obj[d].push(node.data)
  dfs(node.left,obj,d+1)
  dfs(node.right,obj,d+1)
}
