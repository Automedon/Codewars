/*
Description:
Write a function that can take an array of addresses as input, and return an array with the count of addresses for each state.

The input objects will have the following structure:

{
  house: 1234,
  street: "Lonely St.",
  city: "Soldotna",
  zipcode: 99669,
  state: "AK"
}
The returned objects must have the following structure:

{
  state: "AK",
  count: 25
}
The states must be ordered by first appearance.

An error is expected if an input object doesn't have a state property.
*/
function count(addresses) {
  let obj = [...new Set(addresses.map(v=>v.state))]
  if ( obj.some(v=>v===undefined)) throw Error()
  return obj
}
