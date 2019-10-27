function push(head, data) {
  var node = new Node(data);
  node.next = head;
  return node;
}

function buildOneTwoThree() {
  return push(push(push(null, 3), 2), 1);
}

function Node(data) {
  this.data = data;
  this.next = null;
}
