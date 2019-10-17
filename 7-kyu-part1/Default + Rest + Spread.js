/*

42299107?v=4
2 kyu
7046
7 kyu
Default + Rest + Spread
6290% of 60322matt c
JavaScript
TRAIN AGAINNEXT KATA
Details
Solutions
Discourse (34)
Add to Collection|Share this kata:
How satisfied are you with this kata?VERYSOMEWHATNONE
Description:
Default + Rest + Spread
Default + Rest + Spread, this kata is mainly aimed at the new JS ES6 Update introducing class extends
Task
Your task is to Refactor these functions to pass the tests and to follow the new JS ES2015 examples below!
Default
In JavaScript, parameters of functions default to undefined. However, in some situations it might be useful to set a different default value. This is where default parameters can help.
In the past, the general strategy for setting defaults was to test parameter values in the body of the function and assign a value if they are undefined. If in the following example, no value is provided for b in the call, its value would be undefined when evaluating a*b and the call to multiple would have returned NaN. However, this is caught with the second line in this example:

function multiply(a, b) {
  b = typeof b !== 'undefined' ?  b : 1;

  return a*b;
}
multiply(5); // 5
With default parameters, the check in the function body is no longer necessary. Now, you can simply put 1 as the default value for b in the function head:

function multiply(a, b = 1) {
  return a*b;
}
multiply(5); // 5
Rest
Rest parameters have been introduced to reduce the boilerplate code that was induced by the arguments ```javascript // Before rest parameters, the following could be found: function f(a, b){ var args = Array.prototype.slice.call(arguments, f.length); // ... }
// to be equivalent of function(a, b, ...args) { }

<strong>Examples</strong>
Since theArgs is an array, you can get the count of its elements by using the length property:

```javascript
function fun1(...theArgs) {
  console.log(theArgs.length);
}
fun1();  // 0
fun1(5); // 1
fun1(5, 6, 7); // 3
Spread
Example: it is common to use Function.prototype.apply in cases where you want to use an array as arguments to a function.
function f(x, y, z) { }
var args = [0, 1, 2];
f.apply(null, args);
With ES6 spread you can now write the above as:

function f(x, y, z) { }
var args = [0, 1, 2];
f(...args);
Any argument in the argument list can use the spread syntax and it can be used multiple times.

function f(v, w, x, y, z) { }
var args = [0, 1];
f(-1, ...args, 2, ...[3]);

Using the indicated feature, implement a function that achieves the following results: ```javascript function defaultExample(x, y) { return //complete this function } defaultExample(3) // 10
function restExample(x, ...y) { return //complete this function } restExample(9) // 0

function spreadExample(x, y, z) { return //complete this function } spreadExample(...[1,1,1]) // 3 ```


Reference
Default: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/default_parameters
Rest: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
Spreak: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator
*/
function defaultExample(x, y=7) {
  return x + y;
}

function restExample(x, ...y) {
  return x * y.length;
}

function spreadExample(x,y,z) {
  return x + y + z;
}
