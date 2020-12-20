/*
Description:
Description
Peter enjoys taking risks, and this time he has decided to take it up a notch!

Peter asks his local barman to pour him n shots, after which Peter then puts laxatives in x of them. He then turns around and lets the barman shuffle the shots. Peter approaches the shots and drinks a of them one at a time. Just one shot is enough to give Peter a runny tummy. What is the probability that Peter doesn't need to run to the loo?

Task
You are given:

n - The total number of shots.

x - The number of laxative laden shots.

a - The number of shots that peter drinks.

return the probability that Peter won't have the trots after drinking. n will always be greater than x, and a will always be less than n.

You must return the probability rounded to two decimal places i.e. 0.05 or 0.81
*/
function getChance(n, x, a){ 
  let res = 1;
  for(let i = 0; i < a; i++){
    res = res * (1-x/(n-i));
  }
  return res.toFixed(2)*1;
}
