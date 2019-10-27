/*
Description:
Several people are waiting in a long queue for the theater. Write a function that returns a name from a position in the queue.

You will not be given any out-of-range (queue position 0) or null values.

Examples:

queue = {"Sally", "Jim", "Bob", "Kate"};

findInQueue(queue, 1); --> Returns "Sally"

findInQueue(queue, 3); --> Returns "Bob"
queue = ["Sally", "Jim", "Bob", "Kate"];

findInQueue(queue, 1); --> Returns "Sally"

findInQueue(queue, 3); --> Returns "Bob"
queue = new String[]{"Alice", "Sam", "Will", "Lee", "Max"};

findInQueue(queue, 1); --> Returns "Alice"

findInQueue(queue, 3); --> Returns "Will"
queue = {"Sally", "Jim", "Bob", "Kate"};

findInQueue(queue, 1); --> Returns "Sally"

findInQueue(queue, 3); --> Returns "Bob"
queue = [
  'Alice'
  'Sam'
  'Will'
  'Lee'
  'Max'
]

findInQueue(queue, 1) --> Returns "Alice"

findInQueue(queue, 3) --> Returns "Will"
queue = [
      'Alice',
      'Sam',
      'Will',
      'Lee',
      'Max'
    ]

findInQueue(queue, 1) --> Returns "Alice"

findInQueue(queue, 3) --> Returns "Will"
*/
class Kata {
  static findInQueue(queue,n) {
    return queue[n-1]
  }
}
