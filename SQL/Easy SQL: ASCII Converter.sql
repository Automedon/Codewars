/*
Description:
Given a demographics table in the following format:

** demographics table schema **

id
name
birthday
race
you need to return the same table where all text fields (name & race) are changed to the ascii code of their first byte.

e.g. Verlie = 86 Warren = 87 Horace = 72 Tracy = 84
*/
SELECT id,ascii(name) as name, birthday, ascii(race) as race FROM demographics
