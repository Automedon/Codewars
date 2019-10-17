/*
Description:
Bob's coffee shop is really busy, so busy in fact that if you dont have the right amount you won't get a coffee. Bob doesn't like waiting for people to sort change, so if coffee is £2.40 and you have £2.50 you won't get a drink Write a function that returns, "Here is your "+type+", have a nice day!" if they have the right change or returns "Sorry, exact change only, try again tomorrow!"

Drinks avaialble are Americano £2.20, Latte, £2.30, Flat white £2.40, Filter £3.50
*/
function getCoffee(arr,coffee) {
  let sum=arr.reduce((a,b)=>a+b,0);
  if (sum===2.2&&coffee==="Americano") return "Here is your Americano, have a nice day!"
  if (sum===2.3&&coffee==="Latte") return "Here is your Latte, have a nice day!"
  if (sum===2.4&&coffee==="Flat white") return "Here is your Flat white, have a nice day!"
  if (sum===3.5&&coffee==="Filter") return "Here is your Filter, have a nice day!"
  return "Sorry, exact change only, try again tomorrow!"
}
