/*
Description:
Imagine JavaScript didn't natively include the call function. The apply function however still exists.

Using apply, write call.

Note: console.log internally uses the 'call' function, which therefore means you can't debug using console.log as it will either call an empty function or cause an infinite loop.
*/
Function.prototype.call = function(context, ...args) {
  return this.apply(context, args);
};
