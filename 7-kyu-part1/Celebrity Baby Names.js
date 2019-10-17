/*
Description:
Celebrity Baby Names
Celebrities love to call their children quirky names. The latest trend for baby names is the 'last letter trend'. The rules of the trend are as follows: the first letter of a child's name should be the same as the last letter of their older sibling. For example:

Suri (1st child), Ireland (2nd child), Diva (3rd child), Aleph (4th child)

And so on...

Create a function validName which accepts an array of names. It should return "Congratulations, your baby names are compatible!" if all of the names follow the rule. It should return "Back to the drawing board, your baby names are not compatible." if all of the names do not follow the rule.

If a couple only has one child return "Congratulations, you can choose any name you like!"

If the array is empty return "You must test at least one name."

Notes:
Names may be hyphenated or two words e.g. Blue Ivy or Jean-Paul
Names will not include any other characters apart from letters, hyphens or spaces.
*/
function validName(array){
  let arr=[];
  for (let i=0;i<array.length-1;i++){
  if(array[i].slice(-1).toUpperCase()===array[i+1].slice(0,1)) arr.push(true)
  else{arr.push(false)}
  }
  return array.length===0?'You must test at least one name.':arr.every(v=>v===true)&&!arr.length==0?"Congratulations, your baby names are compatible!":
  array.length===1?'Congratulations, you can choose any name you like!'
  :"Back to the drawing board, your baby names are not compatible."
} 
