/*
Description:
My challenge to you is to return the square root of the integers. You will only be given perfect square numbers.

Restrictions are as follows:

You're not allowed to use the word require in your code.
You're not allowed to use the ** symbol.
You're not allowed to use Math.
*/
function squareRootMe(sqrt){
  for (let i=0;i<=sqrt;i++)
    {
      if (i*i===sqrt) return i
    }
}
