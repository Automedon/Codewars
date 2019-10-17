/*
Description:
Iterators

Description
Iterator objects enable custom iteration like CLR IEnumerable or Java Iterable. Generalize for..in to custom iterator-based iteration with for..of. Don’t require realizing an array, enabling lazy design patterns like LINQ.

Task
Your task is simple, create a counter that increments by 1 each time. You must use the iterator described below. Good luck!


Example
```javascript let fibonacci = { [Symbol.iterator]() { let pre = 0, cur = 1; return { next() { [pre, cur] = [cur, pre + cur]; return { done: false, value: cur } } } } }
for (var n of fibonacci) { // truncate the sequence at 1000 if (n > 1000) break; console.log(n); } ```
*/
let counter = {
  [Symbol.iterator]() {
    let cur = 0;
    return {
      next() {
         cur++
        return { done: false, value: cur }
      }
    }
  }
