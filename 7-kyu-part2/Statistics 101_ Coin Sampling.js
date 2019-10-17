/*
You're given a loaded coin with unknown probability p of turning up a head when flipping, and you want to know this probability!

You need to write a function sample which, given a function coin, estimates its probability of turning up head, up to an absolute error of 1% (1/100). To flip a coin, simply call the function: coin().

For simplicity, a head is represented as true *while a tail is represented as *false.
*/
function sample(coin) {
  let head = 0;
  for (let i = 0; i < 8000; i++) {
    if (coin()) { head++; }
  }
  return head / 8000;
}
