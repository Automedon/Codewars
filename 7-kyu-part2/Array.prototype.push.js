/*
Description:
The push() method adds new items to the end of an array, and returns the new length. Your task is to figure out how this functionality works and write your own that works in the exact same way. Array.prototype.push an Array.prototype.slice have been disabled.
*/
Array.prototype.push = function(val) {
  for (let i = 0; i < arguments.length; i++) {
    this[this.length] = arguments[i];
  }
  return this.length;
};
