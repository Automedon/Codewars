/*
Description:
Punky loves wearing different colored socks, but Henry can't stand it.

Given an array of different colored socks, return a pair depending on who was picking them out.

Example:

getSocks('Punky', ['red','blue','blue','green']) -> ['red', 'blue']
Note that Punky can have any two colored socks, in any order, as long as they are different and both exist. Henry always picks a matching pair.

If there is no possible combination of socks, return an empty array.
*/
function getSocks(name, socks) {
 const set=[...new Set(socks)];
 if (name==='Punky') return set.length>1?[set[0],set[1]]:[];
 if (name==='Henry'){
 let sock = socks.filter(s => socks.filter(n => n === s).length > 1)[0];
    if (!sock) return [];
    return [sock, sock];
 };
}
