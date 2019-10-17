/*
Description:
An IPv4 address is a 32-bit number that identifies a device on the internet.

While computers read and write IP addresses as a 32-bit number, we prefer to read them in dotted-decimal notation, which is basically the number split into 4 chunks of 8 bits, converted to decimal, and delmited by a dot.

In this kata, you will create the function ipToNum that takes an ip address and converts it to a number, as well as the function numToIp that takes a number and converts it to an IP address string. Input will always be valid.

##Conversion Example

//original IP address
192.168.1.1

//breaks down into 4 binary octets
11000000 . 10101000 . 00000001 . 00000001

//which are merged together (unsigned 32-bit binary)
11000000101010000000000100000001

//and finally converted to base 10
3232235777
Note that the binary octets are not using two's complement (so we can't have negative numbers) even though JavaScript numbers do.

##Code Examples

###ipToNum

ipToNum('192.168.1.1') //returns 3232235777
ipToNum('10.0.0.0') //returns 167772160
ipToNum('176.16.0.1') //returns 2953838593
###numToIp

numToIp(3232235777) //returns '192.168.1.1'
numToIp(167772160) //returns '10.0.0.0'
numToIp(2953838593) //returns '176.16.0.1'
###nested

numToIp(ipToNum('192.168.1.1')) //returns '192.168.1.1'
ipToNum(numToIp(3232235777)) //returns 3232235777
*/
function ipToNum(ip) {
  return parseInt(ip.split`.`.map(v=>(v*1).toString(2).padStart(8,0)).join``,2)
}
function numToIp(num) {
  let arr = [];
  num=num.toString(2).split``.reverse().join``
  for (let i=0;i<num.length;i+=8){
    arr.push(num.slice(i,i+8))
  }
  return arr.map(v=>v.split``.reverse().join``).reverse().map(v=>parseInt(v,2)).join`.`
}
