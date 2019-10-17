/*
Description:
Don't you just love Wikipedia lists?

In this Kata, you'll write a function that extracts pieces of data and stores them in an Array.

The function will accept two parameters:

data An Array of Objects
property A String representing the property from which to pluck data
An Array should be returned, containing the value extracted for each Object contained in the data Array.

See the Test Cases for examples.
*/
function pluck(data, property) {
  const arr=[];
  for (let i of data ){
  arr.push(i[`${property}`])
  }
  return arr;
}
