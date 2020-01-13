/*
Description:
JavaScript's indexOf does not work with arrays as input. This is because [1,2] === [1,2] will return false in JavaScript. Many other languages have similar quirks.

However, sometimes it is useful to search for an Array. Write a function that looks for an array within a two-dimensional array and returns the index of the first matching element. If there is no match, your function should return -1.

See some examples in JavaScript below.

var arrayToSearch = [[1,2],[3,4],[5,6]];
var query = [1,2]; // => 0
query = [5,6]; // => 2
query = [9,2]; // => -1
And some examples in C#:

var arrayToSearch = new object[] { new object[] { 1,2 } , new object[] { 3,4 }, new object[] { 5,6 } };
var query = new object[] { 1,2 }; // => 0
query = new object[] { 5,6 }; // => 2
query = new object[] { 9,2 }; // => -1
You will be required to validate the inputs on the following criteria:

each element of the array to be searched should be an array;
each sub-array in the two-dimensional array should be of length two; and
query should be an array of length two.
If the inputs are not valid you should throw an Error/Exception. Please note that in C# the test expects that an exception of type Exception be thrown and no subclass of Exception will pass the tests.

See some examples in JavaScript below.

var arrayToSearch = [[1,2],[3,4],[5,6],[7,8,9]]; // => throw Error
arrayToSearch = [1,2,3,4,5,6]; // => throw Error
arrayToSearch = [[1,2],[3,4],[5,6]]; // => valid input
var query = [1,2]; // => valid input
query = 5; // => throw Error
query = [9,2,1]; // => throw Error
And some examples in C#:

var arrayToSearch = new object[] { new object[] { 1,2 }, new object[] { 3,4 }, new object[] { 5,6 }, new object[] { 7,8,9 } }; // => throw Exception
arrayToSearch = new object[] { 1,2,3,4,5,6 }; // => throw Exception
arrayToSearch = new object[] { new object[] { 1,2 }, new object[] { 3,4 }, new object[] { 5,6 } }; // => valid input
var query = new object[] { 1,2 }; // => valid input
query = new object[] { 9,2,1 }; // => throw Exception
*/
var searchArray = function (a, query) {
  if (query.length!==2) throw Error()
  if (a.some(v=>v.length!==2)) throw Error()
  a=a.map(v=>v.join``)
  query=query.join``
  for (let i=0;i<a.length;i++){
    if (a[i]===query) return i
  }
  return -1
}
