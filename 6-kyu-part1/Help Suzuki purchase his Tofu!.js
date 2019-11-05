/*
Description:
Help Suzuki purchase his Tofu!

Suzuki has sent a lay steward to market who will purchase some items not produced in the monastary gardens for the monks. The stewart has with him a large box full of change from donations earlier in the day mixed in with some personal items. You will be given a string of items representing the box.

Sort through the items in the box finding the coins and putting aside anything else.

You will be given a data structure similar to the one below.

box = 'mon mon mon mon mon apple mon mon mon mon mon mon mon monme mon mon monme mon mon mon mon cloth monme mon mon mon mon mon mon mon mon cloth mon mon monme mon mon mon mon monme mon mon mon mon mon mon mon mon mon mon mon mon mon'

Return the following in your solution. 

[count of mon coins in box, count of monme coins in box,sum of all coins value in box, minimum number of coins needed for Tofu]

100 ≤ cost ≤ 1000

cost = 124

returns

[45, 5, 345, 6]
The coins have the following values:

monme = 60

mon = 1

Determine the minimum number of coins to pay for tofu. You must pay with exact change and if you do not have the correct change return “leaving the market”.

If the cost of tofu is higher than your total amount of money also return “leaving the market”
*/
function buyTofu(cost,box){
 let dict = box.split` `.reduce((a,b)=>(a[b]=a[b]?a[b]+1:1,a),{})
 let monme = dict['monme']||0
 let mon = dict['mon']||0
 let arr = [mon,monme,monme*60+mon]
 let coins = 0
 while (cost>=60&&monme){
   cost-=60
   coins++
   monme--
 }
  while (cost>=1){
   cost-=1
   coins++
   mon--
   if (mon<0) return 'leaving the market'
 }
 arr.push(coins)
 return arr
}
