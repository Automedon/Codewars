/*
Description:
Given a string representing a numerical value and a unit, e.g. "12px", return the value and units like so:

input: "12px"
output: {val: 12, units: "px"}
Assume all inputs have a numerical value, but not necessarily any specified units.

There may also be space(s) between the value and the unit, in which case ignore them.
*/
function isHex(str) {
  if (str.length===3||str.length===6){
  const regexp = /^[0-9a-fA-F]+$/;
        if (regexp.test(str)){return true}
        else {return false}
  }
  return false
};
