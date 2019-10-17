/*
Description:
Story
The Pied Piper has been enlisted to play his magical tune and coax all the rats out of town.

But some of the rats are deaf and are going the wrong way!

Kata Task
How many deaf rats are there?

Legend
P = The Pied Piper
O~ = Rat going left
~O = Rat going right
Example
ex1 ~O~O~O~O P has 0 deaf rats
ex2 P O~ O~ ~O O~ has 1 deaf rat
ex3 ~O~O~O~OP~O~OO~ has 2 deaf rats
*/

var countDeafRats = function(town) {
  // Your code here
  if(town != null){
    [left,right]=town.split('P');
        var a=left+right.split('').reverse().join('');
        var b=(a.match(/O~|~O/gi)||[]).filter(v=>v=='O~').length;
         return b;
  }
  return 0;   
}
