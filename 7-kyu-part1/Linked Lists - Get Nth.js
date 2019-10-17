function Node(data) {
  this.data = data;
  this.next = null;
}

function getNth(node, index) {
  if (!node) throw new Error('Invalid node at ' + index);
  
  return (index === 0) ? node : getNth(node.next, index - 1);
}
