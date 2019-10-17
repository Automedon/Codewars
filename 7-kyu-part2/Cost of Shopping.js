/*
Description:
Create a function called shoppingList which calculates the total price for items on a shopping list. The function should return the total.

Assume that only one of each item on the list is purchased.

shoppingList(s) will be presented in the following form:

var shoppingList1 = [
    { itemName : 'Bread', price : 11.00 },
    { itemName : 'Milk', price : 7.00 },
    { itemName : 'Cheese', price : 19.50 }
  ];
Example:
shoppingList( shoppingList1 ) // -> 37.50 (11.00+7.00+19.50)
shoppingList( [{itemName:'Frogs', price: 1200.00 }] ) // -> 1200.00
Happy Shoping !
*/
const shoppingList = function (items) {
  return items.reduce((a,b)=>a+b.price,0);
};
