/*
Description:
Define two functions

hex_to_bin (hexToBin) and bin_to_hex (binToHex)

hex_to_bin

Takes a hexadecimal string as an argument .

Note:This string can contain upper or lower case characters and start with any amount of zeros.

Returns the binary representation (without leading zeros) of the numerical value of the hexadecimal string.

Examples

hexToBin("00F") -> "1111"
hexToBin("5") -> "101"
hexToBin("00000") -> "0"
hexToBin('04D2') -> '10011010010'
bin_to_hex

Takes a binary string (with or without leading zeros) as an argument .

Returns the hexadecimal representation of the numerical value of the binary string.

Note: Any none numerical characters should be lower case

Examples

binToHex("1111") -> "f"
binToHex("000101") -> "5"
binToHex('10011010010') -> '4d2'
Note: You can assume all arguments are valid so there is no need for error checking.

Oh, and I've disabled a few things.

Any feedback would be much appreciated
*/
function binToHex (b) {
  let n = 0
  let x = 1
  let bin = Array(64).fill(0).map(v=>x*=2) 
  let a = []
  let hex = {0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,10:'a',11:'b',12:'c',13:'d',14:'e',15:'f'}
  bin.unshift(1)
  b.split``.reverse().map((v,i)=>v==1?n+=bin[i]:v)
  while (n>=1){
    a.push(n%16)
    n=~~(n/16)
  }
  return a.reverse().map(v=>hex[v]).join``||'0'
}

function hexToBin (hexString) {
  let hex = {0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,a:10,b:11,c:12,d:13,e:14,f:15}
  let a = []
  let n = hexString.toLowerCase().split``.reverse().reduce((a,v,i)=>a+hex[v]*Math.pow(16,i),0)
  while (n>=1){
    a.push(n%2)
    n=~~(n/2)
  }
  return a.reverse().join``||'0'
}
