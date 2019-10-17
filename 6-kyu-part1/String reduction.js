/*
Description:
In this Kata, we are going to see how a Hash (or Map or dict) can be used to keep track of characters in a string.

Consider two strings "aabcdefg" and "fbd". How many characters do we have to remove from the first string to get the second string? Although not the only way to solve this, we could create a Hash of counts for each string and see which character counts are different. That should get us close to the answer. I will leave the rest to you.

For this example, solve("aabcdefg","fbd") = 5. Also, solve("xyz","yxxz") = 0, because we cannot get second string from the first since the second string is longer.

More examples in the test cases.

Good luck!
*/
function solve(a, b) {
  const h=[...a].reduce((h,c)=>(h[c]=h[c]+1||1,h),{});
  for(let c of b) {
    if(!h[c]) return 0;
    h[c]--;
  }
  return Object.values(h).reduce((s,n)=>s+n,0);
};
