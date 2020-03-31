/*
Description:
For this challenge you need to create a simple SELECT statement that will return all columns from the people table, and join to the toys table so that you can return the COUNT of the toys

people table schema
id
name
toys table schema
id
name
people_id
You should return all people fields as well as the toy count as "toy_count".
*/
SELECT people.*, COUNT(toys.id) AS toy_count 
FROM people 
JOIN toys 
ON toys.people_id = people.id 
GROUP BY people.id;
