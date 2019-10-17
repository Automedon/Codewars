/*
Description:
You will be given a function, isFibo(), which will take three arguments: a,b and f.

a is the first term of a fibonacci sequence, b is the second term of this sequence (it will always be bigger than or equal to a and they'll be both always positive, so don't worry about pesky input checking) and f is a number which you'll need to check whether or not is a part of this fibonacci sequence.

Good luck, muh fellow coding warrior.
*/
function isFibo(a,b,f) {
  let arr =[a,b];
  for (let i=1;i<f+10;i++)
  {
  arr.push(arr[i-1]+arr[i])
  }
  return arr.includes(f)
}
