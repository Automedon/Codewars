/*
Description:
You are a biologist working on the amino acid composition of proteins. Every protein consists of a long chain of 20 different amino acids with different properties. Currently, you are collecting data on the percentage, various amino acids make up a protein you are working on. As manually counting the occurances of amino acids takes too long (especially when counting more than one amino acid), you decide to write a program for this task:

Write a function that takes two arguments,

A (snippet of a) protein sequence
A list of amino acid residue codes
and returns the rounded percentage of the protein that the given amino acids make up. If no amino acid list is given, return the percentage of hydrophobic amino acid residues ["A", "I", "L", "M", "F", "W", "Y", "V"].
*/
function aaPercentage (str,a=["A", "I", "L", "M", "F", "W", "Y", "V"]) {
  let len = str.length
  let s = a.map(v=>str=str.replace(new RegExp(v,'g'),''))
  return Math.round((1-(str.length/len))*100)
}
