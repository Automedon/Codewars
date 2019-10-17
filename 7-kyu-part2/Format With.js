/*
Description:
Write

String.prototype.formatWith = function () {}
that takes in a list of arguments and formats the string based off these arguments and indices.

For example:

'Hello {0}'.formatWith('Codewars') ===  'Hello Codewars'
'{0} + {0} = {1}'.formatWith('1','2') ===  '1 + 1 = 2'
'Testing {1}'.formatWith('kata') === 'Testing {1}' // there is no arguments at position 1
*/
String.prototype.formatWith = function(...arr) {
  return this.replace(/{[0-9]}/g, v => {
    let num = v.split``[1] * 1;
    return arr[num] || v;
  });
};
