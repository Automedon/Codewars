/*
Description:
You have been recruited by an unknown organization for your cipher encrypting/decrypting skills.
Being new to the organization they decide to test your skills.
Your first test is to write an algorithm that encrypts the given string in the following steps.

The first step of the encryption is a standard ROT13 cipher. This is a special case of the caesar cipher where the letter is encrypted with its key that is thirteen letters down the alphabet,
i.e. A => N, B => O, C => P, etc..

Part two of the encryption is to take the ROT13 output and replace each letter with its exact opposite. A => Z, B => Y, C => X.
The return value of this should be the encrypted message.

Do not worry about capitalization or punctuation. All encrypted messages should be lower case and punctuation free.
As an example, the string "welcome to our organization" should return "qibkyai ty ysv yvgmzenmteyz".

Good luck, and congratulations on the new position.
*/
function encrypter(string){
  const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  return string.replace(/[a-z]/g,v=>{
    return alphabet[26-((alphabet.indexOf(v)+13)%26)-1]
  })
}
