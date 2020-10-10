/*
Description:
Task
Given the information about sales in a store, calculate the total revenue for each day, month, year, and product.

Notes
Order the result by the product_name, year, month, day columns
We're interested only in the product-specific data, so you shouldn't return the total revenue from all sales
Input tables
----------------------------------------
|    Table      |   Column   |  Type   |
|---------------+------------+---------|
| products      | id         | int     |
|               | name       | text    |
|               | price      | numeric |
|---------------+------------+---------|
| sales         | id         | int     |
|               | date       | date    |
|---------------+------------+---------|
| sales_details | id         | int     |
|               | sale_id    | int     |
|               | product_id | int     |
|               | count      | int     |
-----------------------------------------
Output table
--------------------------
|    Column    |  Type   |
|--------------+---------|
| product_name | text    |
| year         | int     |
| month        | int     |
| day          | int     |
| total        | numeric |
--------------------------
Example output
product_name | year | month | day | total
-------------+------+-------+-----+------
 milk        | 2019 | 01    | 01  | 200
 milk        | 2019 | 01    | 02  | 190
 milk        | 2019 | 01    |     | 390
 milk        | 2019 | 02    | 01  | 240
 milk        | 2019 | 02    |     | 240
 milk        | 2019 |       |     | 630
 milk        |      |       |     | 630
*/
SELECT name as product_name,
  date_part('year',date)::integer as year,
  date_part('month',date)::integer as month,
  date_part('day',date)::integer as day,
  SUM(price * count) AS total
FROM sales_details
JOIN sales 
  ON sales_details.sale_id = sales.id
JOIN products 
  ON sales_details.product_id = products.id
GROUP BY name, 
  ROLLUP(year, month, day)
ORDER BY product_name, year, month, day;
