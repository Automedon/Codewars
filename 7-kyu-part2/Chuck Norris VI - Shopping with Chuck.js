/*
Description:

What do action men wear? Isn't it obvious? 1) Shirt. 2) Cowboy Boots. 3) ACTION PANTS!! Any self respecting action hero heading out to cause some trouble knows the uniform... If you see a man striding towards you in this outfit you should be very careful, he's probably dangerous.

Chucks action pants are extra special though. Due to his immense power, and slightly odd fan base, Chuck's used action pants actually increase in value!! That man can make money from anywhere!

Your task, to pass the kata and potentially, if Chuck reads this, to be sent a pair of old action pants by the man himself, is as follows:

Inputs:
Starting price: start (dollars)
Use: soil (percentage)
Age: age (years)
The action pants appreciate every year depending on the level to which they are soiled (soil input):

Barely used: 10
Seen a few high kicks: 25
Blood stained: 30
Heavily soiled: 50
You will be given the relevant string as the soil input. Return a string prefixed with $ and to 2 decimal places e.g.:

'$25.00'
The inputs should be Number, string, Number... if any of those aren't as expected then return 'Chuck is bottomless!'. Same if the soil input is not one of the specified statements.

Price that gusset!
*/
function price(start, soil, age) {
  if (typeof start!=='number'||typeof soil!=='string'||typeof age!=='number') return 'Chuck is bottomless!'
  let dict = {'Barely used': 0.1,'Seen a few high kicks': 0.25,'Blood stained': 0.30,'Heavily soiled': 0.50}
  for (let i=0;i<age;i++){
    start+=start*(dict[soil])
  }
  if (isNaN(start*1)) return 'Chuck is bottomless!'
  return `$${start.toFixed(2)}`
}
