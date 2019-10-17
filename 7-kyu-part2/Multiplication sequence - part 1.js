/*
Description:
I have created a sequence such that the next number in the sequence is the value of the 2 previous numbers multiplied.

The first two numbers and 1 and 2.

1,2,2,4,8,32,...
For example:

multiplication(0)=1
multiplication(1)=2
multiplication(2)=2
multiplication(3)=4
*/
function multiplication(n) {
  let arr = [1, 2];
  for (let i = 1; i <= n; i++) {
    arr.push(arr[i - 1] * arr[i]);
  }
  return arr[n];
}
