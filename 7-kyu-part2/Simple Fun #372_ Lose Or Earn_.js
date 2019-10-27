/*
Description:
Problem
Businessmen, of course, can make much money. However, sometimes, they would lose money in trading.

For example, John, a businessman, brought in some goods each cost him $40 and he decided to sell at the price of $70. Then a customer came to buy one, gave John $100, and of course got back $30.

You may said, "John earned $30." But unfortunately, John found the $100 from the customer was fake. What a poor man!

In this case John lost his money :(

Now your task is to calculate how much John would lose in this kind of trade. Of course, sometimes John may still earn.

Task
You are given four arguments:

costPrice: the cost price of John's good.

sellPrice: the sell price of John's good.

fakeMoney: the total fake money the customer gave John.

paidBack: how much John paid back to the customer.

Your result should be a string: If John loses money after the deal, return "Lost $xxx"(xxx is the amount of money). Otherwise, return "Earned $xxx".

Still not understand the task? Look at the following example ;-)

Example
For costPrice = 40, sellPrice = 70, fakeMoney = 100, paidBack = 30

the output should be "Lost $70"

In this case John lost $70: ($40 (the goods price) + $30 (the money paid back to the customer)).

For costPrice = 40, sellPrice = 70, fakeMoney = 50, paidBack = 20

the output should be "Lost $20"

In this case John lost $20: John received $40 true money and $50 fake money, then paid back $20 true money to the customer. He has $20 true money left, but the cost price of good is $40, so he lost $20.

Note
0 < costPrice < sellPrice < 100000

0 <= fakeMoney < 100000

0 <= paidBack < 100000

Happy Coding ^_^
*/
function loseOrEarn(costPrice, sellPrice, fakeMoney, paidBack) {
  let m = sellPrice - costPrice - fakeMoney;
  return `${m > 0 ? "Earned" : "Lost"} $${Math.abs(m)}`;
}
