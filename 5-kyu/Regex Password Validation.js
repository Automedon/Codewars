/*
Description:
You need to write regex that will validate a password to make sure it meets the following criteria:

At least six characters long
contains a lowercase letter
contains an uppercase letter
contains a number
Valid passwords will only be alphanumeric characters.
*/
function validate(password) {
  const Upper = password.match(/[A-Z]/);
  const Lower = password.match(/[a-z]/);
  const Number = password.match(/[0-9]/);
  const Length = password.length > 5;
  if (password.replace(/[0-9A-Z]/gi, "").length > 0) return false;
  return Upper && Lower && Number && Length;
}
