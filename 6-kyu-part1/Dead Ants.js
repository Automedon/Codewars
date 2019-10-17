/*
Description:
An orderly trail of ants is marching across the park picnic area.

It looks something like this:

..ant..ant.ant...ant.ant..ant.ant....ant..ant.ant.ant...ant..
But suddenly there is a rumour that a dropped chicken sandwich has been spotted on the ground ahead. The ants surge forward! Oh No, it's an ant stampede!!

Some of the slower ants are trampled, and their poor little ant bodies are broken up into scattered bits.

The resulting carnage looks like this:

...ant...ant..nat.ant.t..ant...ant..ant..ant.anant..t
Can you find how many ants have died?

Notes
When in doubt, assume that the scattered bits are from the same ant. e.g. 2 heads and 1 body = 2 dead ants, not 3
*/
deadAntCount = function(ants) {
  if (!ants) return 0
  let str = ants.replace(/ant/g,'')
  let head =  str.replace(/[^a]/g,'').length
  let body =  str.replace(/[^n]/g,'').length
  let tail =  str.replace(/[^t]/g,'').length
  return Math.max(head,body,tail)
}
