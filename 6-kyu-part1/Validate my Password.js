/*
Description:
I will give you a string. You respond with "VALID" if the string meets the requirements or "INVALID" if it does not.

Passwords must abide by the following requirements:

More than 3 characters but less than 20.

Must contain only alphanumeric characters.

Must contain letters and numbers.
*/
function validPass(password){
  let length = password.length
  if (length<3||length>20) return 'INVALID'
  if (/\W/.test(password)) return 'INVALID'
  let letters = /[a-z]/i.test(password)
  let numbers = /[0-9]/.test(password)
  if (letters&&numbers) return 'VALID'
  return 'INVALID'
}
