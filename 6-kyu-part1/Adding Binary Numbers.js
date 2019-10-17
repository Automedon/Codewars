/*
Description:
##Task: You have to write a function add which takes two binary numbers as strings and returns their sum as a string.

##Note:

You are not allowed to convert binary to decimal & vice versa.
The sum should contain No leading zeroes.
##Examples:

add('111','10'); => '1001'
add('1101','101'); => '10010'
add('1101','10111') => '100100'
*/
function add(a,b){
  a = a.split('').reverse();
  b = b.split('').reverse();
  var result = '', temp = 0;
  while (a.length || b.length || temp) {
    temp += (~~a.shift()) + (~~b.shift());
    let mod = temp % 2;
    result = mod + result;
    temp = temp > 1;
  }
  return (+result) ? result.replace(/^0+/, '') : '0';
};
