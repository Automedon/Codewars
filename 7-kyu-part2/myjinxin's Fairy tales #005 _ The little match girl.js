/*
Description:
myjinxin's Fairy tales series #005:
The little match girl

Story
On a cold New Year’s Eve, a poor girl tries to sell matches in the street. She is freezing badly, but she is afraid to go home because her father will beat her for not selling any matches. She takes shelter in a nook and lights the matches to warm herself.

In their glow, she sees several lovely visions including a Christmas tree and a holiday feast. The girl looks skyward and sees a shooting star, then she remembers her dead grandmother saying that such a falling star means someone has died and is going into Heaven. As she lights the next match, she sees a vision of her grandmother, the only person to have treated her with love and kindness. She strikes one match after another to keep the vision of her grandmother alive for as long as she can.

Running out of matches, the child dies and her grandmother carries her soul to Heaven. The next morning, passers-by find the child dead in the nook and take pity on her, not knowing that she had left this world and will not be cold or hungry any more.

The ending is so sad, why don't we have a happy ending? such as the little girl sold her matches, and then buy some lottery tickets and winning $1000000? Or the little girl and the guy who sold the lighter fell in love, and then held a grand wedding? I hate Andersen.

Descrption
The little match girl in the corner of the street. There are some matches in her hands:"i1!111ii!i1!111ii!i1!111ii!i1!111ii!". i is a match that did not burn. You can see the match head on the top of i. ! is also a match that did not burn, The match head is at the bottom of the !. 1 is a burnt match.

Here is the little match girl's action:

["Sell:2","Burn:1","Sell:3","Burn:2","Burn:1","Burn:1","Burn:1"]
We want to know: To the last, What's in the little girl's hand? The above example should return:

"$1$1111$$$1111111111!111ii!i1!111ii!"

Sell: i/!-->$  Burn: i/!-->1
The little match girl always sell or burn the match from left side.

Task
Complete function poorGirl that accepts 2 argument matches and action. Returns the result in accordance with the rules above.

Note: If the action requires more than the actual number of matches, please ignore the additional action.
*/
function poorGirl(matches,action){
  action=action.map(v=>{
  v=v.split`:`
  return v[0]==='Sell'?v[1]*1:v[1]*-1
  })
  matches=matches.split``
  for (let i=0,j=0;i<matches.length;i++){
    if (action[j]===0){j++}
    if (matches[i]!=='1') {
      if (action[j]>0){
      action[j]--
      matches[i]='$'
      } else if(action[j]<0) {
      action[j]++
      matches[i]='1'
      }
    } 
  }
  return matches.join``
}
