/*
Description:
Task
Given a string representing a simple fraction x/y, your function must return a string representing the corresponding mixed fraction in the following format:

[sign]a b/c

where a is integer part and b/c is irreducible proper fraction. There must be exactly one space between a and b/c. Provide [sign] only if negative (and non zero) and only at the beginning of the number (both integer part and fractional part must be provided absolute).

If the x/y equals the integer part, return integer part only. If integer part is zero, return the irreducible proper fraction only. In both of these cases, the resulting string must not contain any spaces.

Division by zero should raise an error (preferably, the standard zero division error of your language).

Value ranges
-10 000 000 < x < 10 000 000
-10 000 000 < y < 10 000 000
Examples
Input: 42/9, expected result: 4 2/3.
Input: 6/3, expedted result: 2.
Input: 4/6, expected result: 2/3.
Input: 0/18891, expected result: 0.
Input: -10/7, expected result: -1 3/7.
Inputs 0/0 or 3/0 must raise a zero division error.
Note
Make sure not to modify the input of your function in-place, it is a bad practice.
*/
function mixedFraction(s){
  let [n1,n2] = s.split`/`
  n1=Number(n1)
  n2=Number(n2)
  if (n2===0) throw Error(`Divisor 0`)
  if (n1===0) return '0'
  let n3 = ~~(n1/n2)
  if (n1%n2===0) return n3.toString()
  let d = gcd(n1,n2)
  n1=(n1-n3*n2)/d
  n2=n2/d
  if (n1<0&&n2<0||n3<0){
    n1=Math.abs(n1)
    n2=Math.abs(n2)
  }
  if (n1>0&&n2<0){
    n1=n1*-1
    n2=Math.abs(n2)
  }
  if (n3===0) return `${n1}/${n2}`
  return `${n3} ${n1}/${n2}`
}

const gcd = (a, b) => b ? gcd(b, a % b) : Math.abs(a);
