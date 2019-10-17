/*
Description:
Parse the text and replace Globally url with corresponding html syntax.

Supported protocols:

http
https
ftp
ftps
file
smb
NOTE: Ideal will be with ** Regex **

Input
'hello http://world.com !'

Output
'hello <a href="http://world.com">http://world.com</a> !'
*/
function anchorize(text) {
  return text.replace(
    /((http|https|ftp|ftps|file|smb):\/{2}[a-zA-Z\d:\/.]+)\b/gim,
    '<a href="$1">$1</a>'
  );
}
