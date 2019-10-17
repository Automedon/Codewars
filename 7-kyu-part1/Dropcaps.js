/*
Description:
DropCaps means that the first letter of the starting word of the paragraph should be in caps and the remaining lowercase, same like you see in the newspaper.

But for a change lets do that for each and every word of the given String. Your task is to capitalize very word that has length greater than 2, leaving smaller words as they are.

*should work also on Leading and Trailing Spaces and caps.

dropCap('apple') => "Apple"
dropCap('apple of banana'); => "Apple of Banana"
dropCap('one   space'); => "One   Space 
dropCap('   space WALK   '); => "   Space Walk   " 
Note: you will be provided atleast one word and should take string as input and return string as output.
*/

function dropCap(n) {
  return n.split(' ').map(v=>v.length>2?v[0].toUpperCase()+v.slice(1).toLowerCase():v)
  .join(' ')
}
