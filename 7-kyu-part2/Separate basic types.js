/*
Description:
Given: a sequence of different type of values (number, string, boolean). You should return an object with a separate properties for each of types presented in input. Each property should contain an array of corresponding values.

keep order of values like in input array
if type is not presented in input, no corresponding property are expected
So, for this input:

['a', 1, 2, false, 'b']
expected output is:

{
  number: [1, 2],
  string: ['a', 'b'],
  boolean: [false]
}
*/

const separateTypes=(input)=>input.reduce((a,b)=>{
    const type = typeof b;
    return {...a,[type]:input.filter(v=>typeof v === type)}
  },{})
