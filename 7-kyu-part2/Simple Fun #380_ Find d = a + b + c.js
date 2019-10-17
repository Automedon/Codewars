/*
Description:
Task
You are given a sorted integer array arr. It contains several uniq integers(negative, positive, or zero).

Your task is to find the largest d such that a + b + c = d, where a, b, c, and d are distinct elements of arr. If no such an element d found, return null.

Still not understand the task? Look at the following example ;-)

Example
For arr = [2,3,5,7,12], the output should be 12.

12 = 2 + 3 + 7
For arr = [2,16,64,256,1024], the output should be null.

No such an element d found.

For arr = [-100,-1,0,7,101], the output should be 0.

0 = -100 + -1 + 101
Note
3 < arr.length <= 50

-1000 <= arr[i] <= 1000

Happy Coding ^_^
*/
function findD(arr) {
  let a = [];
  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      for (let z = j + 1; z < arr.length; z++) {
        if (
          arr.includes(arr[i] + arr[j] + arr[z]) &&
          Math.abs(arr[i]) !== Math.abs(arr[j]) &&
          Math.abs(arr[i]) !== Math.abs(arr[z]) &&
          Math.abs(arr[j]) !== Math.abs(arr[z])
        )
          a.push(arr[i] + arr[j] + arr[z]);
      }
    }
  }
  return a.length ? Math.max(...a) : null;
}
