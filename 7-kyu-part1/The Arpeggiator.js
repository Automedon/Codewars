/*
Description:
In music, a scale is made up of seven different values (A through G inclusive) with the ROOT value occuring twice forming the scale's first and eighth (last) note.

So if the root = B, the scale looks like this:

  B C D E F G A B
and if the root = F, the scale looks like this:

  F G A B C D E F
Each scale has an arpeggio made up of it's first, third, fifth and eighth notes.

So the arpeggio for scale root B looks like this:

 B D F B
and the arpeggio for scale root F looks like this:

 F A C F
Write a programme that takes any possible root note and returns it's arpeggio in an array. If the object input isn't a root note, return 'unrecognised root note'. Watch for capitalization!

Example:

arpeggio("A") == ["A", "C", "E", "A"]
arpeggio("E") == ["E", "G", "B", "E"]
arpeggio("Z") == "unrecognised root note"
arpeggio("a") == "unrecognised root note"
*/
function arpeggio(notes) {
  switch(notes) {
    case 'A' : return ["A", "C", "E", "A"]; 
    case 'B' : return ["B", "D", "F", "B"]; 
    case 'C' : return ["C", "E", "G", "C"]; 
    case 'D' : return ["D", "F", "A", "D"]; 
    case 'E' : return ["E", "G", "B", "E"]; 
    case 'F' : return ["F", "A", "C", "F"]; 
    case 'G' : return ["G", "B", "D", "G"]; 
    default : undefined;
  }  
}
