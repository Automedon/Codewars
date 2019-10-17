/*
Description:
Elia and Lyanna decided that keeping a kitty, or communal wallet, would be a good idea to help them share their finances while they were travelling.

They made equal financial contributions into the kitty during their trip and used the shared money to easily pay for things that they shared without having to split the costs every time.

This worked brilliantly for a while but unfortunately things quickly got complicated as sometimes the communal kitty was used to pay for something that wasn't shared or an individual's money was used to pay for a communal expense.

Luckily they kept track of these expenditures and could feed them into a simple function to work out who owes what to whom.

Given four variables:

eliaShared - being the total amount that Elia spent on shared costs out of her own money.
eliaBorrowed - being the total amount that Elia spent from the kitty on her own personal expenses.
lyannaShared - being the total amount that Lyanna spent on shared costs out of her own money.
lyannaBorrowed - being the total amount that Lyanna spent from the kitty on her own personal expenses.
Return one of three string formatted outcomes:

"Elia owes Lyanna x"
"Lyanna owes Elia y"
"The kitty is already even"
The result should not be formatted into a currency as the kitty may be used in lots of different places and friends don't worry about subdivisions - so result values such as "Elia owes Lyanna 50.5" or "Lyanna owes Elia 6000" are expected.
*/
function repairKitty(a,b,c,d) {
  return (e=(b-a-d+c)/2)>0?`Elia owes Lyanna ${e}`:e<0?`Lyanna owes Elia ${-e}`:`The kitty is already even`
}
