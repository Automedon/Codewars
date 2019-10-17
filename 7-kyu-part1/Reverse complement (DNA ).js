/*
Description:
In genetic the reverse complement of a sequence is formed by reversing the sequence and then taking the complement of each symbol.

The four nucleotides in DNA is Adenine (A), Cytosine (C), Guanine (G) and Thymine (Thymine).

A is the complement of T
C is the complement of G.
This is a bi-directional relation so:

T is the complement of A
G is the complement of C.
For this kata you need to complete the reverse complement function that take a DNA string and return the reverse complement string.

Note: You need to take care of lower and upper case. And if a sequence conatains some invalid characters you need to return "Invalid sequence".

This kata is based on the following one but with a little step in addition.
*/
function reverseComplement(dna) {
  let error=0;
  let rev=dna.split``.map(v=>{
  if (v==='A') return 'T'
  if (v==='C') return 'G'
  if (v==='T') return 'A'
  if (v==='G') return 'C'
  if (/[ACTG]/.test) return error++
  }).reverse().join``
  return error>0?"Invalid sequence":rev
}
