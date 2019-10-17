/*
Description:
Coding 3min: Father and Son

This is the simple version of Shortest Code series. If you need some challenges, please try the challenge version

#Task:
Every uppercase letter is Father, The corresponding lowercase letters is the Son.

Give you a string ```s```, If the father and son both exist, keep them. If it is a separate existence, delete them. Return the result.

For example: 

```sc("Aab")``` should return ```"Aa"```

```sc("AabBc")``` should return ```"AabB"```

```sc("AaaaAaab")``` should return ```"AaaaAaa"```(father can have a lot of son)

```sc("aAAAaAAb")``` should return ```"aAAAaAA"```(son also can have a lot of father ;-)
*/
function sc(s){
  let obj={};
  s.split``.map(v=>obj[v]=obj[v]?obj[v]+1:1)
  return s.split``.map(v=>{
  let upper=v.toUpperCase();
  let low=v.toLowerCase()
  if (obj[upper]>=1&&obj[low]>=1){ return v}
  return v=''
  }).join``
}
