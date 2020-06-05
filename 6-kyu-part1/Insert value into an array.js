/*
Description:
Extend the Array object with the function insert(index,value). This function must change the original array and insert the value at the given index in the array.

If the index is greater than the array's size, insert the value at the end.

You must return the array to be able to chain the insert function call.

You can use Array's built-in functions to help you.

The 'insert' function must not be enumerable.

Example :

[1,2,3].insert(0,42) => [42,1,2,3]
*/
Object.defineProperty(Array.prototype, "insert", {
  enumerable: false,
  value: function (index, value) {
    if (index > this.length - 1) {
      let arr = [...this, value];
      for (let i = 0; i < arr.length; i++) {
        this[i] = arr[i];
      }
      return this;
    }
    const left = this.slice(0, index);
    const right = this.slice(index);
    let arr = [...left, value, ...right];
    for (let i = 0; i < arr.length; i++) {
      this[i] = arr[i];
    }
    return this;
  },
});
