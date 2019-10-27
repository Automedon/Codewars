/*
Description:
Kate and Michael want to buy a pizza and share it. Depending on the price of the pizza, they are going to divide the costs:

If the pizza is less than €5,- Michael invites Kate, so Michael pays the full price.
Otherwise Kate will contribute 1/3 of the price, but no more than €10 (she's broke :-) and Michael pays the rest.
How much is Michael going to pay? Calculate the amount with two decimals, if necessary.
*/

function michaelPays(costs) {
  if (costs < 5) return parseFloat(costs.toFixed(2));
  return costs / 3 > 10
    ? parseFloat((costs - 10).toFixed(2))
    : parseFloat((costs / 3 + costs / 3).toFixed(2));
}
