/*
Description:
Run-length encoding (RLE) is a very simple form of data compression in which runs of data (that is, sequences in which the same data value occurs in many consecutive data elements) are stored as a single data value and count, rather than as the original run.
Wikipedia

Task
Your task is to write such a run-length encoding. For a given string, return a list (or array) of pairs (or arrays) [ (i1, s1), (i2, s2), …, (in, sn) ], such that one can reconstruct the original string by replicating the character sx ix times and concatening all those strings. Your run-length encoding should be minimal, ie. for all i the values si and si+1 should differ.

Examples
As the article states, RLE is a very simple form of data compression. It's only suitable for runs of data, as one can see in the following example:

runLengthEncoding("hello world!")
 //=>      [[1,'h'],[1,'e'],[2,'l'],[1,'o'],[1,' '],[1,'w'],[1,'o'],[1,'r'],[1,'l'],[1,'d'],[1,'!']]
It's very effective if the same data value occurs in many consecutive data elements:


*/
var runLengthEncoding = function(str){
  const arr=[];
  let value=1;
  for (let i=0;i<str.length;i++){
      if (str[i]!==str[i+1]){
      arr.push([value,str[i]]);
      value=1;
      } else {
      value++;
      }
  }
  return arr;
}
