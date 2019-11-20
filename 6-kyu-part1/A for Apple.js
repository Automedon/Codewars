/*
Description:
Input: Integer n
Output: String
Example:

a(4) prints as

   A   
  A A  
 A A A 
A     A
a(8) prints as

       A       
      A A      
     A   A     
    A     A    
   A A A A A   
  A         A  
 A           A 
A             A
a(12) prints as

           A           
          A A          
         A   A         
        A     A        
       A       A       
      A         A      
     A A A A A A A     
    A             A    
   A               A   
  A                 A  
 A                   A 
A                     A
Note:

Each line's length is 2n - 1
Each line should be concatenate by line break "\n"
If n is less than 4, it should return ""
If n is odd, a(n) = a(n - 1), eg a(5) == a(4); a(9) == a(8)
*/
function a(n){
  if (n%2!==0) n--
  if (n<=2) return ''
  let str = ''
  for (let i=0;i<n;i++){
   if (i===0){
     str+=' '.repeat(n-i-1)+'A'+' '.repeat(n-i-1)+'\n'
   }else if (i===1){
     str+=' '.repeat(n-i-1)+'A'+' '+'A'+' '.repeat(n-i-1)+'\n'
   }else if (i===(n/2)){
     str+=' '.repeat(n-i-1)+'A'+' A'.repeat(n/2)+' '.repeat(n-i-1)+'\n'
   }else {
     str+=' '.repeat(n-i-1)+'A'+' '.repeat(i*2-1)+'A'+' '.repeat(n-i-1)+'\n'
   }
 }
  return str.slice(0,-1)
}
