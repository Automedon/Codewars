/*
Description:
In Treasury Bills, you borrow the Federal Government money for a duration of time (within 365 days) at an interest rate. However, there is a way the capital is deducted from your account.

Say you have 1,000 Naira in your account and want to invest the 1,000 Naira for 90 days at 13.5% interest. Only 966.71 Naira [i.e. 1000 - (1000*(13.5/100)*(90/365))] will be deducted from your account and 1,000 Naira paid back after 90 days.

But you don't want that, you actually want the whole 1,000 Naira taken from your account and not just 966.71 Naira so you have to calculate the capital to invest. In this case, you should have invested 1,034.43 Naira at 13.5% for 90 days so 1,000 Naira is deducted and 1,034.43 paid back after 90 days.

You will be given amountInAccount, duration, and rate, return the maximum capital (to 2 decimal places) to clear out my account.

**amountInAccount** - will always be between 1,000 and 10,000,000 Naira
**duration** - will always be between 30 and 365 days.
**rate** - will always be between 1.00 and 100.00%
*/
const tBills=(amountInAccount, duration, rate)=>{
  let a = amountInAccount-(amountInAccount*rate/100)*(duration/365)
  if (amountInAccount===0) return 0
  return amountInAccount/a*amountInAccount
}
