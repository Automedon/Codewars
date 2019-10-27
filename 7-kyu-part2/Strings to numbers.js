/*
Description:
You are given an array of numbers in string form. Your task is to convert this to an array of numbers.

Your function can only be a maximum of 30 characters long (not including whitespaces)! I have limited the char count because there is a very short and easy way to achieve this task.

Here is an example of what your function needs to return:

['1','2','3'] => [1,2,3]
Edge Cases:

1 - If your function comes up against a value that isn't a number its place in the array must be substituted with NaN.

2 - An empty array must return an empty array.
*/
let convert = a => a.map(v => v * 1);
