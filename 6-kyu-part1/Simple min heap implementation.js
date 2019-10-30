/*
Description:
Heap
Heap is a data structure, that takes elements in arbitrary order, and returns them in a sorted order one by one.

Implementing a min heap
In this kata, we will implement a min heap, it is going to have 2 methods:

push
Takes a value and adds it to a heap

pop
Finds the smallest value in the heap, removes it from the heap, and returns it

var heap = new MinHeap();
heap.push(4);
heap.push(1);
heap.push(7);
heap.push(9);
heap.push(2);
console.log( heap.pop()); // 1
console.log( heap.pop()); // 2
console.log( heap.pop()); // 4
console.log( heap.pop()); // 7
console.log( heap.pop()); // 9
Please note that for this kata we do not assess the effiency of your implementation, so anything that acts like a heap will pass the tests.

You can read more about heap wikipedia
*/
function MinHeap(){
  this.heap = []
}
MinHeap.prototype.push = function(v){
  this.heap.push(v)
  this.heap.sort((a,b)=>b-a)
}

MinHeap.prototype.pop = function(){
  return this.heap.pop()
}
