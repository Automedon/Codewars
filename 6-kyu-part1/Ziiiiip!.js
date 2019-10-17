/*
Description:
Let's implement the zipObject function that enables such results

zipObject(['fred', 'barney'], [30, 40])
=> { 'fred': 30, 'barney': 40 }

zipObject([['fred', 30], ['barney', 40]])
=> { 'fred': 30, 'barney': 40 }
The zipObject creates an object composed from arrays of keys and values. It is provided with either a single two dimensional array, i.e. [[key1, value1], [key2, value2]] or with two arrays, one of keys and one of corresponding values.

If only keys are given, then set the values to undefined.

zipObject(['fred', 'barney'])
{ fred: undefined, barney: undefined }
If neither keys nor values are specified, then return {}

zipObject()
{}
*/
function zipObject(keys, values = []) {
  if (!keys) return {};
  keys = flat(keys.concat(values));
  let str = [];
  let num = [];
  for (let i = 0; i < keys.length; i++) {
    if (typeof keys[i] === "string") str.push(keys[i]);
    else num.push(keys[i]);
  }
  return str.reduce((a, b, i) => ((a[b] = num[i] || undefined), a), {});
}
const flat = arr => {
  return arr.reduce((a, b) => a.concat(Array.isArray(b) ? flat(b) : b), []);
};
