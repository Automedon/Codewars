/*
Description:
Variation of this nice kata, the war has expanded and become dirtier and meaner; both even and odd numbers will fight with their pointy 1s. And negative integers are coming into play as well, with, ça va sans dire, a negative contribution (think of them as spies or saboteurs).

Again, three possible outcomes: odds win, evens win and tie.

Examples:

bitsWar([1,5,12]) => "odds win" //1+101 vs 1100, 3 vs 2
bitsWar([7,-3,20]) => "evens win" //111-11 vs 10100, 3-2 vs 2
bitsWar([7,-3,-2,6]) => "tie" //111-11 vs -1+110, 3-2 vs -1+2
*/
function bitsWar(numbers) {
  let odd = numbers.filter(v=>v%2!==0)
  let odd2 = odd.map(v=>Math.abs(v).toString(2).replace(/0/g,'').length).map((v,i)=>odd[i]<0?v*-1:v*1).reduce((a,b)=>a+b,0)
  let even = numbers.filter(v=>v%2===0)
  let even2 = even.map(v=>Math.abs(v).toString(2).replace(/0/g,'').length).map((v,i)=>even[i]<0?v*-1:v*1).reduce((a,b)=>a+b,0)
  return odd2>even2?'odds win':odd2===even2?'tie':'evens win'
}
