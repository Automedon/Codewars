/*
Description:
Find the longest substring in alphabetical order.

Eg: the longest alphabetical substring in asdfaaaabbbbcttavvfffffdf is aaaabbbbctt.

There are tests with strings up to 10000 characters long so your code will need to be efficient.

The input will only consist of lowercase characters and will be at least one letter long.

Good luck :)
*/
function longest(str) {
  let st = 'abcdefghijklmnopqrstuvwxyz';
  let arr = [];
  let s = '';
  let index = -1
  for (let i=0;i<=str.length;i++){
    if (st.indexOf(str[i])>=index){
      index = st.indexOf(str[i])
      s+=str[i]
    } else {
      i--
      arr.push(s)
      index=-1
      s=''
    }
  }
  let max = Math.max(...arr.map(v=>v.length))
  return arr.filter(v=>v.length===max)[0]
}
