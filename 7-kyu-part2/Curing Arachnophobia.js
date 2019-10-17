/*
Description:
There is no single treatment that works for every phobia, but some people cure it by being gradually exposed to the phobic situation or object. In this kata we will try curing arachnophobia by drawing primitive spiders.

Our spiders will have legs, body, eyes and a mouth. Here are some examples:

/\((OOwOO))/\

/╲(((0000w0000)))╱\

^(oWo)^
You will be given four values:
1) leg size where each value stands for its own leg type: 1 for "^ ^", 2 for "/\ /\", 3 for "/╲ ╱\", 4 for "╱╲ ╱╲"
2) body size where each value stands for its own body type: 1 for "( )", 2 for "(( ))", 3 for "((( )))"
3) mouth representing the spider's mouth
4) eye representing the spider's eye

Note: the eyes are symmetric, and their total amount is 2 to the power of body size.

You will also be given only valid data. That's it for the instructions, you can start coding!
*/
function drawSpider(legSize, bodySize, mouth, eye) {
  let eyes = `${eye}`.repeat(Math.floor(Math.pow(bodySize,2)/2))
  if (bodySize===1){
    eyes = `${eye}`.repeat(bodySize)
  }
  let bodyL = `(`.repeat(bodySize)
  let bodyR = `)`.repeat(bodySize)
  let legs=(legSize===1?"^ ^":legSize===2?"\/\\ \/\\":legSize===3?"\/╲ ╱\\":"╱╲ ╱╲")
  let legL = legs.split` `[0]
  let legR = legs.split` `[1]
  return legL+bodyL+eyes+mouth+eyes+bodyR+legR
}
