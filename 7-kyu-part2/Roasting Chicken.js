/*
Oliver likes to roast a chicken on a Sunday Afternoon.

He knows that in order to get it just how he wants it, he should roast it for 20 minutes for every 450g of uncooked weight plus an additional 20 minutes

You are given a weight of a uncooked chicken in kg, return for how long it needs to be roasted - in hours and minutes, rounding up to the nearest five minutes.

If the chicken is to be roasted for more than 2 hours then write hrs, otherwise write hr.

If the chicken is to be roasted for less than an hour, only give the number of minutes.

If the uncooked weight is 0, return "There is no chicken!"

An example time is 2 hrs 45 mins
*/
function cookingTime(weight){
  if (weight===0) return "There is no chicken!"
  let r = Math.ceil((weight/0.450)*20+20)
  while(r%5!==0){
    r++
  }
  let h=0
  while (r>=60){
    r-=60
    h++
  }
  return `${h?h>1?`${h} hrs`:`${h} hr`:''}${r?r>1?` ${r} mins`:` ${r} min`:''}`.trim()
}
