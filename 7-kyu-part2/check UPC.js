/*
Description:
Description

In the UPC-A system, the check digit is calculated as follows:

Add the digits in the odd-numbered positions (first, third, fifth, etc.) together and multiply by three.
Add the digits in the even-numbered positions (second, fourth, sixth, etc.) to the result.
Find the result modulo 10 (i.e. the remainder when divided by 10.. 10 goes into 58 5 times with 8 leftover).
If the result is not zero, subtract the result from ten.
For example, in a UPC-A barcode "03600029145x" where x is the unknown check digit, x can be calculated by:

Adding the odd-numbered digits (0 + 6 + 0 + 2 + 1 + 5 = 14)
Multiplying by three (14 × 3 = 42)
Adding the even-numbered digits (42 + (3 + 0 + 0 + 9 + 4) = 58)
Calculating modulo ten (58 mod 10 = 8)
Subtracting from ten (10 − 8 = 2)
NOTE

assume input has standard 12 UPC digits only
assume input is digits only, no characters, signs or controls
don't consider empty input verification
Example

checkUPC('036000291452') == true
checkUPC('036000291450') == false
*/
function checkUPC(upc) {
	let step12 = upc.slice(0,-1).split``.filter((v,i)=>i%2===0).reduce((a,b)=>a+b*1,0)*3
  let step3 = upc.slice(0,-1).split``.filter((v,i)=>i%2!==0).reduce((a,b)=>a+b*1,0)+step12
  let step4= step3%10
  let step5= step4!==0?10-step4:0
  return upc[upc.length-1]===step5.toString()
}
