/*
Description:
One of the first chain emails I ever received was about a supposed Cambridge University study that suggests your brain can read words no matter what order the letters are in, as long as the first and last letters of each word are correct.

Your task is to create a function that can take any string and randomly jumble the letters within each word while leaving the first and last letters of the word in place.

For example,
mixwords('Winter is coming') // returns 'Wntier is cminog' or 'Wtiner is conimg'
mixwords('Hey, friends!') // returns 'Hey, fierdns!' or 'Hey, fernids!'
All punctuation should remain in place
Words smaller than 3 letters should not change
Letters must be randomly moved (and so calling the function multiple times with the same string should return different values
Parameters that are not strings should return undefined
The tests do the following things to ensure a valid string is returned:

Check that the string returned is not equal to the string passed (you may have to revalidate the solution if your function randomly returns the same string)
Check that first and last letters of words remain in place
Check that punctuation remains in place
Checks string length remains the same
Checks the function returns undefined for non-strings
Checks that word interiors (the letters between the first and last) maintain the same letters, albeit in a different order
Checks that letters are randomly assigned.
*/
function mixwords(str) {
  if (typeof str === "string") {
    return str.replace(/[a-z]+/gi, v => {
      if (v.length > 2)
        return (
          v.slice(0, 1) +
          v.slice(1, -1).split``.sort((a, b) => Math.random() - 0.5).join`` +
          v.slice(-1)
        );
      return v;
    });
  }
}
