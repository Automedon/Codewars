/*
Description:
Overview
For this kata we will be using the DVD Rental database.

Your are working for a company that wants to reward its top 10 customers with a free gift. You have been asked to generate a simple report that returns the top 10 customers by total amount spent. Total number of payments has also been requested.

The query should output the following columns:

customer_id [int4]
email [varchar]
payments_count [int]
total_amount [float]
and has the following requirements:

only returns the 10 top customers, ordered by total amount spent
*/
SELECT  
  customer_id,
  email,
  COUNT(amount) as payments_count,
  CAST(SUM(amount) as float) as total_amount
FROM customer
JOIN payment USING (customer_id)
GROUP BY customer_id
ORDER BY total_amount DESC
LIMIT 10;
