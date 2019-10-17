/*
Description:
Sys Admins are always on your case to improve the strength of your passwords. You could really use a handy function to make your passwords completely un-hackable.

Use the super secret characters in the superSecretChars variable to replace the matching characters in your totally insecure password and make it un-hackable.

eg. replace all 'a's with '@'s. Make sure you get the upper case characters too just in case the user wants to SHOUT their password at you.
*/
function createSSP(password){
  const dict={'a': '@','s': '$','o': '0','h': '5','x': '*'}
  return password.split('').map((v,i)=>Object.keys(dict)
  .includes(v.toLowerCase())?dict[v.toLowerCase()]:v).join``
}
