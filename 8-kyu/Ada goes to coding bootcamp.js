/*
In which our protagonist dreams of becoming a developer:
Ada really really wants to join a coding bootcamp. She has some savings but might need to borrow some money to be able to pay the fees for the bootcamp if she doesn't have enough saved.

In which our protagonist is offered help:
Ada's sister tells her that she is willing to lend her the money for an agreed amount of months but will charge her monthlyInterest and expects the loan to be repaid in the agreed amount of months.

In which our protagonist wants to dream responsibly:
Calculate how much the coding bootcamp will end up costing Ada, including the amount she might need to borrow (difference between fees and savings) plus interest on the borrowed amount.

Assumptions:
fees, savings, months and monthlyInterest are all positive numbers;
fees, savings and monthlyInterest are floats.
monthlyInterest is a percentage (ex. 30.5 is to be interpreted as 30.5%)
return value is the total cost of the bootcamp.
interest is fixed.
*/
function totalCost(fees, savings, months, monthlyInterest) {
  if (fees<=savings) return fees
  let procent=(fees-savings)*(monthlyInterest/100)
  let sum=fees
  for (let i=0;i<months;i++){
    sum+=procent
    }
  return sum
}
