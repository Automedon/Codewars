/*
Description:
There are no explanations. You have to create the code that gives the following results in Python and Ruby:

one_two_three(0) == [0, 0]
one_two_three(1) == [1, 1]
one_two_three(2) == [2, 11]
one_two_three(3) == [3, 111]
one_two_three(19) == [991, 1111111111111111111]
And it should give the following results in Javascript:

oneTwoThree(0) ---> ['0', '0']
oneTwoThree(1) ---> ['1', '1']
oneTwoThree(3) ---> ['3', '111']
oneTwoThree(19) ---> ['991', '1111111111111111111']
#Everyoneneedsawarmupinthemorning
*/
oneTwoThree = n => n ? ['9'.repeat(~~(n/9)) + (n % 9 ? n % 9 : ''), '1'.repeat(n)] : ['0', '0']
