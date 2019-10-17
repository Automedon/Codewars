/*
Task
Given Two intgers a , b , find The sum of them , BUT You are not allowed to use the operators + and -

Notes
The numbers (a,b) may be positive , negative values or zeros .

Returning value will be integer .

Javascript: the Array reduce methods are disabled, along with eval, require, and module .

Java: the following methods are prohibited: addExact, average, collect, decrement, increment, nextAfter, nextDown, nextUp, reduce, subtractExact, sum, summing . The following classes are prohibited: BigDecimal and BigInteger .

NASM: the following instructions are prohibited: add, adc, adcx, adox, dec, inc, lea, sbb, sub .

Input >> Output Examples
1- Add (5,19) ==> return (24) 

2- Add (-27,18) ==> return (-9)

3- Add (-14,-16) ==> return (-30)
*/
function add(x, y)
{
  while (y != 0) {
  let carry = x & y;
  x = x ^ y;
  y = carry << 1;
        }
        return x;
}
