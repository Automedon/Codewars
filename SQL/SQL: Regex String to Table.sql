/*
Description:
You are given a table 'random_string' that has the following format:

** random_string schema **

text
The text field holds a single row which contains a random string.

Your task is to take the random string and split it on each vowel (a, e, i, o, u) then the resultant substrings will be contained in the output table, formatted as:

** output table schema **

results
Note that the vowels should be removed.

If there are no vowels, there will only be one row returned. Where there are multiple vowels in succession, you will see empty rows. A row should ebe created on each break, whether there is content in the row or not.

Regex is advised but not mandatory.
*/
SELECT regexp_split_to_table(text,'[aeiou]') as results FROM random_string
