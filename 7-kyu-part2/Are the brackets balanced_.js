/*
Given a string which may include opening or closing round brackets, can you tell whether the string contains a balanced pair(s) of round brackets, that is there are no brackets which are either opened & not closed, or vice versa. Opening round brackets always have to come before closing bracket.
*/
function isBalanced(string){
   string=string.replace(/[^\(\)]/g,'')
   while(string.replace(/(\(\))/).length!==string.length){
     string=string.replace(/(\(\))/,'') 
   }
   return !string.length
}
