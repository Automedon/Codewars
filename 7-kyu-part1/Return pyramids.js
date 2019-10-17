/*
Description:
The task is very simple.

You must to return pyramids. Given a number n you print a pyramid with n floors

For example , given a n=4 you must to print this pyramid:

   /\
  /  \
 /    \
/______\ 
Other example, given a n=6 you must to print this pyramid:

     /\
    /  \
   /    \
  /      \
 /        \
/__________\
Another example, given a n=10, you must to print this pyramid:

         /\
        /  \
       /    \
      /      \
     /        \
    /          \
   /            \
  /              \
 /                \
/__________________\
Note: an extra line feed character is needed at the end of the string. Case n=0 should so return "\n".
*/
function pyramid(n){
  const arr=[];
  let i=0
  for ( i;i<n-1;i++){
  arr.push(' '.repeat(n-i-1)+'/'+' '.repeat(i)+' '.repeat(i)+'\\')
  }
  arr.push('/'+'_'.repeat(i)+'_'.repeat(i)+'\\'+'\n')
  return arr.join('\n')
}
