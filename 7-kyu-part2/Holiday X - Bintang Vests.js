/*
Description:

No self respecting traveller would leave Indonesia without buying a vest sporting the logo of their national beer. I mean, you don't want to offend anyone do you?? Good, I thought not.

The thing is, although they are sold absolutely everywhere, it's hard to know if you are being ripped off on price. (let's not discuss being ripped off on fashion...).

So you need to practice your haggling skills. As I understand it there are four methods: light haggle, medium haggle, strong haggle and walk away swearing until you get chased down the street and offered one half price.

So, given the price of the vest (price) and the haggling strategy (haggle), return the relevant price with discount applied as follows:

light = 20% medium = 30% heavy = 40% walkandswear = 90%

If the haggle value is anything other than those specified, you will have offended someone, return 'Run!!'

Prices are all in Rupia
*/
function vestBuy(price, haggle){
  if (haggle==='light') return price*0.8
  if (haggle==='medium') return price*0.7
  if (haggle==='heavy') return price*0.6
  if (haggle==='walkandswear') return price*0.1
  return 'Run!!'
}
