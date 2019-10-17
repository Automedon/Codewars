/*
Description:
Write a function that takes a number or a string and gives back the number of permutations without repetitions that can generated using all of its element.; more on permutations here.

For example, starting with:

1
45
115
"abc"
You could respectively generate:

1
45,54
115,151,511
"abc","acb","bac","bca","cab","cba"
So you should have, in turn:

perms(1)==1
perms(45)==2
perms(115)==3
perms("abc")==6
*/
function perms(element) { 
  var str = '' + element;
  var counts = {};
  var numerator = 1;
  var denominator = 1;
  for (var i = 0; i < str.length; i++) {
    counts[str[i]] = (counts[str[i]] || 0) + 1;

    numerator *= i + 1;
    denominator *= counts[str[i]];
  }
  return numerator / denominator;
}
