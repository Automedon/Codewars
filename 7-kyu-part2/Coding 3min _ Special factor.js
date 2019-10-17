/*
Description:
Coding 3min : Special factor

This is the simple version of Shortest Code series. If you need some challenges, please try the challenge version

#Task:
Give you a positive integer ```n```, find out the special factor.

What is the special factor? An example: if n has a factor x, we can convert them into binary string, if binary string of n contains binary string of x, we can say, x is a special factor of n.

Return an array, include all of the special factor(Ascending order)
#Example:
```
example1:
n = 6   factor of n: 1,2,3,6
convert them to binary string:
n ==> "110"
factors: 1==>"1"  2==>"10"  3==>"11"  6==>"110"
Hmmm... It seems "110" contains all of them.
So, sc(6) should return [1,2,3,6]

example2:
n = 15   factor of n: 1,3,5,15
convert them to binary string:
n ==> "1111"
factors: 1==>"1"  3==>"11"  5==>"101"  15==>"1111"
Hmmm... "1","11","1111" are special factors, but "101" is not.
So, sc(15) should return [1,3,15]

example3:
n = 100   factor of n: 1,2,4,5,10,20,25,50,100
convert them to binary string:
n ==> "1100100"
factors: 1==>"1"  2==>"10"  4==>"100"  5==>"101" 10==>"1010"
  20==>"10100"  25==>"11001"  50==>"110010"  100==>"1100100"
Hmmm... "1","10","100","11001","110010","1100100" are special factors,
"101","1010","10100" are not.
So, sc(100) should return [1,2,4,25,50,100]

```
*/
function sc(n){
  let arr = [];
  let check = []
  let s = n.toString(2)
  for (let i=0;i<=s.length;i++){
    for (let j=i+1;j<=s.length;j++){
      check.push(s.slice(i,j))
    }
  }
  for (let i=1;i<=n;i++){
  if (n%i===0)arr.push(i)
  }
  arr=arr.filter(v=>check.includes(v.toString(2)))
  return arr
}
