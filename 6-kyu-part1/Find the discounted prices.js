/*
Description:
Your friend Cody has to sell a lot of jam, so he applied a good 25% discount to all his merchandise.

Trouble is that he mixed all the prices (initial and discounted), so now he needs your cool coding skills to filter out only the discounted prices.

For example, consider this inputs:

"15 20 60 75 80 100"
"9 9 12 12 12 15 16 20"
They should output:

"15 60 75"
"9 9 12 15"
Every input will always have all the prices in pairs (initial and discounted) sorted from smaller to bigger.

You might have noticed that the second sample input can be tricky already; also, try to have an eye for performances, as huge inputs could be tested too.

Final Note: kata blatantly taken from this problem (and still not getting why they created a separated Code Jam for ladies, as I find it rather discriminating...), this kata was created inspired by two of the talented girls I am coaching thanks to codebar :)
*/
function findDiscounted(prices){
  const obj = prices.split` `.reduce((a,b)=>(a[b]=a[b]?a[b]+1:1,a),{})
  const arr = prices.split` `.map(v=>v*1)
  const answer = []
  arr.map(v=>{
    if (obj[v]&&obj[v*0.75]){
      answer.push(v*0.75)
      obj[v]--
      obj[v*0.75]--
    }
  })
  return answer.join` `
}
