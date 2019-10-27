/*
Description:
Task
N lamps are placed in a line, some are switched on and some are off. What is the smallest number of lamps that need to be switched so that on and off lamps will alternate with each other?

You are given an array a of zeros and ones - 1 mean switched-on lamp and 0 means switched-off.

Your task is to find the smallest number of lamps that need to be switched.

Example
For a = [1, 0, 0, 1, 1, 1, 0], the result should be 3. a --> 1 0 0 1 1 1 0 swith --> 0 1 0 became--> 0 1 0 1 0 1 0

Input/Output
[input] integer array a

array of zeros and ones - initial lamp setup, 1 mean switched-on lamp and 0 means switched-off.

2 < a.length <= 1000

[output] an integer

minimum number of switches.
*/
function lamps(a) {
  var switch1 = 0;
  var switch2 = 0;
  for (var i = 0; i < a.length; i++) {
    if (i % 2 == 0) {
      if (a[i] != 1) {
        switch1++;
      } else {
        switch2++;
      }
    } else {
      if (a[i] != 0) {
        switch1++;
      } else {
        switch2++;
      }
    }
  }

  return Math.min(switch1, switch2);
}
