/*
Description:
This is the first part. You can solve the second part here when you are done with this. Multiply two numbers! Simple!

The arguments are passed as strings.
The numbers may be way very large
Answer should be returned as a string
The returned "number" should not start with zeros e.g. 0123 is invalid
Note: 100 randomly generated tests!
*/
function multiply(a, b) {
  var aa = a.split('').reverse();
  var bb = b.split('').reverse();

  var stack = [];

  for (var i = 0; i < aa.length; i++) {
    for (var j = 0; j < bb.length; j++) {
      var m = aa[i] * bb[j];
      stack[i + j] = (stack[i + j]) ? stack[i + j] + m : m;
    }
  }

  for (var i = 0; i < stack.length; i++) {
    var num = stack[i] % 10;
    var move = Math.floor(stack[i] / 10);
    stack[i] = num;

    if (stack[i + 1])
      stack[i + 1] += move;
    else if (move != 0)
      stack[i + 1] = move;
  }


  return stack.reverse().join('').replace(/^(0(?!$))+/, "");
}
