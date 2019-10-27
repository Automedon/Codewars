/*
Description:
In genetics a reading frame is a way to divide a sequence of nucleotides (DNA bases) into a set of consecutive non-overlapping triplets (also called codon). Each of this triplets is translated into an amino-acid during a translation process to create proteins.

Input
In a single strand of DNA you find 3 Reading frames, take for example the following input sequence:

AGGTGACACCGCAAGCCTTATATTAGC
Output
For the output we are going to take the combinations and show them in the following manner:

Frame 1: AGG TGA CAC CGC AAG CCT TAT ATT AGC
Frame 2: A GGT GAC ACC GCA AGC CTT ATA TTA GC
Frame 3: AG GTG ACA CCG CAA GCC TTA TAT TAG C
For frame 1 split all of them in groups of three starting by the first base (letter).

For frame 2 split all of them in groups of three starting by the second base (letter) but having the first base (letter) at the beggining.

For frame 3 split all of them in groups of three starting by the third letter, but having the first and second bases (letters) at the beginning in the same order.
*/
var decomposeSingleStrand = function(singleStrand) {
  let frame1 = [];
  let frame2 = [];
  let frame3 = [];
  frame2.push(singleStrand.slice(0, 1));
  frame3.push(singleStrand.slice(0, 2));
  for (let i = 0; i < singleStrand.length; i += 3) {
    frame1.push(singleStrand.slice(0 + i, i + 3));
    frame2.push(singleStrand.slice(1 + i, i + 4));
    frame3.push(singleStrand.slice(2 + i, i + 5));
  }
  return `Frame 1: ${frame1.join` `}\nFrame 2: ${frame2.join` `}\nFrame 3: ${frame3.join` `}`;
};
