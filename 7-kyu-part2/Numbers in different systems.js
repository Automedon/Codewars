/*
Translate number to the selected number system. If the number consists just of digits - return number, else - return string.

  SysNums(5,2) // 101
  SysNums(5,8) // 5
  SysNums(250,2) // 11111010
  SysNums(250,16) // "fa"
#####Hint: System can be 2, 8, 10, 16.
*/
const sysNums = (n, sys) =>
  isNaN(n.toString(sys) * 1) ? n.toString(sys) : n.toString(sys) * 1;
