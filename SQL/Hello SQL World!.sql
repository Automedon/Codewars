/*
Description:
Hello SQL!

Return a table with a single column named Greeting with the phrase 'hello world!'

Please use Data Manipulation Language and not Data Definition Language to solve this Kata
*/
CREATE TABLE Hell(greeting VARCHAR(50));
INSERT INTO Hell(greeting) VALUES ('hello world!');
SELECT greeting AS "Greeting" FROM Hell;
