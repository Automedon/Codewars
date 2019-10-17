/*
You're working at a bio-engineering lab that wants you to create a function that will help recreate DNA strands. At the moment, you only have one half of the DNA. Your job is to create the corresponding other half of the DNA.

For Example:

  dnaMaker('gctcacgtag') // => 'cgagtgcatc'
  dnaMaker('cactgcctagtcactgat') // => 'gtgacggatcagtgacta'
Remember, c corresponds with g, and a corresponds with t
*/
function dnaMaker(dna) {
  return dna.replace(/[gcta]/g,v=>{
  if (v==='g') return 'c'
  if (v==='c') return 'g'
  if (v==='t') return 'a'
  if (v==='a') return 't'
  })
}
