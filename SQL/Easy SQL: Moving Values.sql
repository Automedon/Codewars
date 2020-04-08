/*
Description:
You have access to a table of monsters as follows:

** monsters table schema **

id
name
legs
arms
characteristics
Your task is to make a new table where each column should contain the length of the string in the column to its right (last column should contain length of string in the first column). Remember some column values are not currently strings. Column order and titles should remain unchanged:

** output table schema **

id
name
legs
arms
characteristics
*/
SELECT 
char_length(''||name) as id,
char_length(''||legs) as name,
char_length(''||arms) as legs,
char_length(''||characteristics) as arms,
char_length(''||id) as characteristics
FROM monsters;
