/*
Description:
You have been hired by a trading firm to create a program that calculates the maximum amount of shares you can trade, given a set of trading variables.

A crucial element of trading success is taking the appropriate position size on each trade which helps control risk and maximise returns on the risk taken.

When trading stocks, the position size is how many shares you will trade. For example, if I buy 400 shares of stock 'ABC' then my position size is 400. The position size is formulated from the entry price, stoploss and the proportion of our capital that we are risking.

Stoploss
The stoploss is like a safety net which limits the amount of loss occured to our capital in our trading account. For example, I buy a stock at $5 and place my stoploss at $4.90. If the price moves down by 10 cents, the shares will automatically sell at $4.90 and the total loss on the trade will be $0.10 x number of shares bought.

Trade types
To go LONG means buying a stock and anticipating it to move higher. Stoploss should be placed below the entry price.

To go SHORT means borrowing a stock then selling immediately, anticipating a move lower. Stoploss should be placed higher than the entry price.

Position Size Examples
LONG trade

positionSize('LONG', 3, 2.95, 10000, 2)  // 4000
Bob has $10,000 in his trading account. He sees an opportunity to buy a stock for $3 and adjusts his stoploss to $2.95. How many shares can Bob buy so he risks no more than 2% of his capital?

Answer: The maximum amount of shares Bob can buy is 4,000 because if the price moves down by $0.05, the total loss on the trade will be $0.05 x 4,000 = $200, which is 2% of $10,000

SHORT trade

positionSize('SHORT', 5, 5.50, 5000, 5)  // 500
Jack has $5,000 in his trading account. He sees an opportunity to short a stock which is priced at $5 and adjusts his stoploss to $5.50. How many shares can Jack short so he risks no more than 5% of his capital?

Answer: The maximum amount of shares Jack can short is 500 because if the price moves up by $0.50, the total loss on the trade will be $0.50 x 500 = $250, which is 5% of $5,000

Your task
Your job is to create a function that calculates the maximum number of shares you can trade.

Your function will be passed 5 parameters as illustrated below:

positionSize(tradeType, entryPrice, stoploss, capital, riskPercentage) 
Notes
1) tradeType will either be 'LONG' or 'SHORT'

2) You will need to check that the stoploss given is valid.

For 'LONG' trades, the stoploss should be less than the entry price.

For 'SHORT' trades, the stoploss should be greater than the entry price.

If the stoploss is invalid, return false.

3) riskPercentage is the risk expressed as a percentage. e.g 2.5 means 2.5%

4) Returned value must be rounded to the nearest integer

More examples
positionSize('LONG', 3, 2.95, 10000, 2)  // 4000
positionSize('SHORT', 32.50, 33 , 12500, 4.5)  // 1125
positionSize('LONG', 3, 3.00, 10000, 2)  // false
positionSize('SHORT', 4.54, 4.53, 6000, 3.75)  // false
*/
function positionSize(type, price, stoploss, capital, risk) {
  let loss = capital * risk / 100
  if (type == 'LONG') return price > stoploss && Math.round(loss / (price - stoploss))
  if (type == 'SHORT') return price < stoploss && Math.round(loss / (stoploss - price))
}
