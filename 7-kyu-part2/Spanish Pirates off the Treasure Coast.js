/*
Description:
The Spanish King wants to bring gold back to the empire. The first step is finding pirates and the gold in the new world.
*/
function secretMap(sp){
  let pile =0;
  let pirate=0;
  [].concat(...sp).map(v=>v==="pile_of_gold"?pile++:v==="pirate"?pirate++:v)
  return `count of pirates: ${pirate} and the count of gold piles: ${pile}`
}
