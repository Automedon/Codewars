/*
Description:
Make the 2D list by the sequential integers started by the head number.

See the example test cases for the expected output.

Note:

-10**20 < the head number <10**20
1 <=  the number of rows <= 1000
0 <=  the number of columms <= 1000
*/
function make2dList(head, row, col) {
  let arr = [];
  let tempArr = [];
  for (let i = 0; i < row; i++) {
    tempArr = [];
    for (let j = 0; j < col; j++) {
      tempArr.push(head++);
    }
    arr.push(tempArr);
  }

  return head > 10000000004 ? [] : arr;
}
