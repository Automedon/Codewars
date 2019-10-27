/*
Description:
Task
An IP address contains four numbers(0-255) and separated by dots. It can be converted to a number by this way:

Given a string s represents a number or an IP address. Your task is to convert it to another representation(number to IP address or IP address to number).

You can assume that all inputs are valid.

Example
Example IP address: 10.0.3.193

Convert each number to a 8-bit binary string (may needs to pad leading zeros to the left side):

10  -->  00001010
0   -->  00000000
3   -->  00000011
193 -->  11000001
Combine these four strings: 00001010 00000000 00000011 11000001 and then convert them to a decimal number: 167773121

Input/Output
[input] string s

A number or IP address in string format.

[output] a string

A converted number or IP address in string format.

Example
For s = "10.0.3.193", the output should be "167773121".

For s = "167969729", the output should be "10.3.3.193".
*/
function numberAndIPaddress(s) {
  if (/\./.test(s)) {
    return ipToNum(s).toString();
  } else {
    return numToIp(s);
  }
}
function ipToNum(ip) {
  return parseInt(
    ip.split`.`.map(v => (v * 1).toString(2).padStart(8, 0)).join``,
    2
  );
}
function numToIp(num) {
  return (num * 1)
    .toString(2)
    .padStart(32, 0)
    .match(/.{8}/g)
    .map(v => parseInt(v, 2)).join`.`;
}
