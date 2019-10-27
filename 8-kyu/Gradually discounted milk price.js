/*
Description:
Gradually discounted milk price
We have to implement a milkPrice function that returns the milk price reduced by a volume discount system that will lower the milk price per liter every 2 liters of milk.

The discount system is very simple, every 2 litres the milk price is reduced by $0.05.

For example

Price per liter: $1.23 you buy 5 liters

2 liters at 1.18
2 liters at 1.13
1 liters at 1.13

Milk price: $5.75
The final result should be rounded with only 2 decimals.

Note: partial liters should be managed.
*/
function milkPrice(litres, pricePerLitre) {
  let p = [];
  let l = []
  while (litres>1){
    litres-=2;
    pricePerLitre-=0.05
    l.push(2)
    p.push(pricePerLitre)
  }
  while (litres===1){
    litres-=1;
    l.push(1)
    p.push(pricePerLitre)
  }
  while (litres>0){
    l.push(litres)
    litres-=litres;
    
    p.push(pricePerLitre)
  }
  return Math.round(p.reduce((a,b,i)=>a+b*l[i],0)*100)/100
}
