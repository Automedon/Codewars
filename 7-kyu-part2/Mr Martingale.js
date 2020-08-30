/*
Description:
You're in the casino, playing Roulette, going for the "1-18" bets only and desperate to beat the house and so you want to test how effective the Martingale strategy is.

You will be given a starting cash balance and an array of binary digits to represent a win or a loss as you play: 0 for loss and 1 for win.

You should create a function martingale to return the balance after playing all rounds.

You start with a stake of 100 dollars(unit of cash). If you lose a round, you lose the stake placed on that round and double the stake for your next bet. When you win, you win 100% of the stake and revert back to staking 100 dollars on your next bet.

Example

martingale(1000, [1, 1, 0, 0, 1]) === 1300
you win your 1st round: gain $100, balance = 1100
win 2nd round: gain $100, balance = 1200
lose 3rd round: lose $100 dollars, balance = 1100
double stake for 4th round and lost: staked $200, lose $200, balance = 900
double stake for 5th round and won: staked $400 won $400, balance = 1300

NOTE: Your balance is allowed to go below 0 (debt) :(
*/
function martingale(bank, outcomes)
{
  let mult = 1
  outcomes.map( win =>{
    if (win){
      bank += 100*mult
      mult = 1
    } else {
      bank -= 100*mult
      mult*=2
    }
  })
  return bank
}
