/*
Description:
Remove HTML tags and return string without:
1) <tag> and </tag>
2) <tag/>
3) <tag />
4) html tags with attributes.
Don't trim space, tab etc.

You have to use regexp.

Tests are using function:
String.prototype.replace(your regexp, "")

Have fun :)
*/
const reg = /<[^>]*>/g
