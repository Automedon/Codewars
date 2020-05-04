/*
Description:
Array Exchange and Reversing

It's time for some array exchange! The objective is simple: exchange the elements of two arrays in-place in a way that their new content is also reversed.

// before
const myArray = ['a', 'b', 'c'];
const otherArray = [1, 2, 3];

exchangeWith(myArray, otherArray);

// after
myArray => [3, 2, 1]
otherArray => ['c', 'b', 'a']
*/
function exchangeWith(a,b){
  const temp1 = a.slice().reverse()
  const temp2 = b.slice().reverse()
  while (a.length){
    a.shift()
  }
  while (b.length){
    b.shift()
  }
  for (let i of temp2){
    a.push(i)
  }
  for (let i of temp1){
    b.push(i)
  }
}
