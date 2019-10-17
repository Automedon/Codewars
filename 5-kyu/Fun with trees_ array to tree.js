/*
You are given a non-null array of integers. Implement the method arrayToTree which creates a binary tree from its values in accordance to their order, while creating nodes by depth from left to right.

For example, given the array [17, 0, -4, 3, 15] you should create the following tree:

    17
   /  \
  0   -4
 / \
3   15 
The class TreeNode is available for you:

var TreeNode = function(value, left, right) {
  this.value = value;
  this.left = left;
  this.right = right;
};
This kata is part of fun with trees series:

Fun with trees: max sum
Fun with trees: array to tree
Fun with trees: is perfect
*/
function arrayToTree(values, i = 0) {
  if (i >= values.length) return;
  return new TreeNode(values[i], arrayToTree(values, 2 * i + 1),
                                 arrayToTree(values, 2 * i + 2));
}
