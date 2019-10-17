/*
###Task:

You have to write a function pattern which returns the following Pattern(See Examples) upto n number of rows.

Note:Returning the pattern is not the same as Printing the pattern.
####Rules/Note:

The pattern should be created using only unit digits.
If n < 1 then it should return "" i.e. empty string.
The length of each line is same, and is equal to the number of characters in a line i.e n.
Range of Parameters (for the sake of CW Compiler) :
n ∈ (-50,150]
###Examples:

pattern(8):

88888888
87777777
87666666
87655555
87654444
87654333
87654322
87654321
pattern(17):

77777777777777777
76666666666666666
76555555555555555
76544444444444444
76543333333333333
76543222222222222
76543211111111111
76543210000000000
76543210999999999
76543210988888888
76543210987777777
76543210987666666
76543210987655555
76543210987654444
76543210987654333
76543210987654322
76543210987654321
*/
function pattern(n){
  if (n<=0) return ''
  let s = n.toString().split``.reverse()[0]
  let output=[`${s}`.repeat(n)];
  for (let i=n,j=0;i>0;i--,j++){
    if (s===-1){
      s=9
    }
    output.push((output[j].slice(0,j)+`${s--}`.repeat(n-j)))
  }
  return output.slice(1).join`\n`
}
