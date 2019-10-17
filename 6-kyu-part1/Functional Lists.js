/*
Description:
In this kata, you will create a simple, immutable, singly-linked list.

Most list implementations use mutable nodes. Mutability brings with it a whole host of problems (especially in threaded environments, but even just with state saved and shared in multiple places). When you shift to immutable nodes, you gain a new ability to reason about things. If you have a list, it will never contain different things than it does at the moment.

However, when dealing with immutable nodes, one has to take special steps to try to maintain efficiency. For example, to add a node to the beginning of a list, you don't want to have to duplicate the whole list. You want to be able to share as many nodes of the list as possible between the original list and the newly generated list (while still being a singly-linked list).

There are two classes involved here: EmptyList and ListNode. Each of these should support the following operations: toString(), isEmpty(), length(), push(), remove(), and append(). If isEmpty() returns false, then the following two methods should also be supported: head() and tail().

var list0 = new EmptyList();        // => "()"
var list1 = list0.push(3);          // => "(3)"
var list2 = list1.push(2);          // => "(2 3)"
var list3 = list2.push(1);          // => "(1 2 3)"
var list13 = list1.append(list3);   // => "(3 1 2 3)"

list13.head()    // => 3
list13.tail()    // => list3

list1 instanceof ListNode
list1.tail() instanceof EmptyList
Diagramatically, this is what list3 above should look like:


Or, if you prefer JSON:

{ value: 1,
  next: { value: 2,
          next: { value: 3,
                  next: {} } } }
The EmptyList constructor takes no arguments. The ListNode constructor takes a value and a next parameter. The value parameter can be anything. The next parameter will be either a ListNode instance or an EmptyList instance representing the rest of the list after this node.

The toString() method should return "()" for an EmptyList and "(1 2 3)" for a list containing the numbers 1, 2, and 3.

The isEmpty() method will return true for EmptyList instances and false for the ListNode instances.

The length() method will return the number of non-EmptyList nodes in a list.

The orig.push(x) method will create a list whose first node contains the value x and where the new list shares as many nodes as possible with orig (while still being a singly-linked list).

The orig.remove(x) method will create a list where all nodes with value x are removed and which shares as many nodes as possible with orig (while still being a singly-linked list).

The orig.append(other) method will create a list which is a concatenation of all nodes in orig and all nodes in other and which shares as many nodes as possible with orig and other (while still being a singly-linked list).

If orig.isEmpty() returns false, then orig.head() should return the value in the first node of the list. The orig.tail() should return the sublist of orig containing all of the nodes except the first node in orig.
*/
function List() {}

function EmptyList() {}
EmptyList.prototype = new List();
EmptyList.prototype.constructor = EmptyList;

EmptyList.prototype.toString = function() { return '()'; };
EmptyList.prototype.isEmpty = function() { return true; };
EmptyList.prototype.length = function() { return 0; };
EmptyList.prototype.push = function(x) { return new ListNode(x, this); };
EmptyList.prototype.remove = function(x) { return this; };
EmptyList.prototype.append = function(xs) { return xs; };

function ListNode(value, next) { this.v = value; this.n = next; }
ListNode.prototype = new List();
ListNode.prototype.constructor = ListNode;
ListNode.prototype.isEmpty = function() { return false; };

ListNode.prototype.toString = function() {
  var n = this.n;
  var r = [this.v];
  while (!n.isEmpty()) {
    r.push(n.v);
    n = n.n;
  }
  return '(' + r.join(' ') + ')';
};

ListNode.prototype.head = function() { return this.v; };
ListNode.prototype.tail = function() { return this.n; };
ListNode.prototype.length = function() { return 1 + this.n.length(); };
ListNode.prototype.push = function(x) { return new ListNode(x, this); };
ListNode.prototype.remove = function(x) {
  var t = this.n.remove(x);
  if (x == this.v) return t;
  if (t == this.n) return this;
  else return new ListNode(this.v, t);
};
ListNode.prototype.append = function(xs) { return new ListNode(this.v, this.n.append(xs)); };
