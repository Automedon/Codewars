/*
Description:
You are the owner of the Grocery Store. All your products are in the database, that you have created after CodeWars SQL excercises!:)

You have reached a conclusion that you waste to much time because you have to many different warehouse to visit each week.

You have to find out how many unique products have each of the Producer. If you take only few items from some of them you will stop going there to save the gasoline:)

In the results show producer and unique_products which you buy from him.

Order the result by unique_products (DESC) then by producer (ASC) in case there are duplicate amounts,

products table schema
id
name
price
stock
producer
results table schema
unique_products
producer
*/
SELECT COUNT(*) as unique_products,producer FROM products 
GROUP BY producer
ORDER BY unique_products DESC, producer ASC;
