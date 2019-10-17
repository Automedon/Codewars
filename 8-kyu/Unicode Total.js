/*
Description:
You'll be given a string, and have to return the total of all the unicode characters as an int. Should be able to handle any characters sent at it.

examples:

uniTotal("a") == 97 uniTotal("aaa") == 291
*/

function uniTotal(str)
{
return [...str].reduce((total, char) => total + char.charCodeAt(0), 0)
}
