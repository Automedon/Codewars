/*
Description:
Back before I learned to code I played a lot of Fifa. One of the many things I've wasted a good portion of life on! Still, I just saw a TV advert announcing the release of the new version, so thought it deserved a kata in memory of the many happy hours.

You have placed bets on a series of football matches. Your ticket is represented by (ticket) and will look something like this:

Home:£74
Away:£36
Draw:£5

Each line is a seperate bet and will be a key:value pair within the ticket object. In each case you will always place a bet for a home win, an away win and a draw. You're weird like that. Each bet is for a different game.

Your will also be given an array of (results). Like this:

[3-0, 1-1, 0-2] <-- strings in array

There will always be the same number of result as there are bets on the ticket (3). In the results array, a higher number on the left side of the pair = Home win, higher on the right = Away win, equal = Draw. Like this:

3-0 = Home win
0-3 = Away win
3-3 = Draw

For each line on your ticket, check whether or not the result matches. If it does, you win the amount specified on the ticket for that match. Like this:

Away:£20
Home:£10
Draw:£5
[1-0, 2-1, 0-1]
Results in Winnings = £10 (first bet lost, second bet won, third bet lost);

Return your total winning as a string with the £ sign like this: '£100'

Good luck!
*/

function fifa(ticket, results){
  const r1=results[0].split('-')[0]>results[0].split('-')[1]
  const r2=results[1].split('-')[0]<results[1].split('-')[1]
  const r3=results[2].split('-')[0]===results[2].split('-')[1]
  const arr=Object.values(ticket).map(v=>v.replace('£','')).map(v=>v*1)
  let result=0;
  if (r1) result+=arr[0];
  if (r2) result+=arr[1];
  if (r3) result+=arr[2];
  return `£${result}`
}
