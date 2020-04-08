/*
Description:
You are given a table numbers with just one column, number. It holds some numbers that are already ordered.

You need to write a query that makes them un-ordered, as in, every possible ordering should appear equally often.
*/
SELECT *
FROM numbers
ORDER BY RANDOM();
