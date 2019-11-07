/*
Description:
The sports centre needs repair. Vandals have been kicking balls so hard into the roof that some of the tiles have started sticking up. The roof is represented by x.

As a quick fix, the committee have decided to place another old roof over the top, if they can find one that fits. This is your job.

A 'new' roof (s) will fit if it currently has a hole in it at the location where the old roof has a tile sticking up.

Sticking up tiles are represented by either '' or '/'. Holes in the 'new' roof are represented by spaces (' '). Any other character can not go over a sticking up tile.

Return true if the new roof fits, false if it does not.
*/
function roofFix(s, x){
  return x.split``.every((v,i)=>v==='_' || s[i]===' ')
}
