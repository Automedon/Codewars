/*
Description:
In input string word(1 word):

replace the vowel with the nearest left consonant.
replace the consonant with the nearest right vowel.
P.S. To complete this task imagine the alphabet is a circle (connect the first and last element of the array in the mind). For example, 'a' replace with 'z', 'y' with 'a', etc.(see below)

For example:

'codewars' => 'enedazuu'
'cat' => 'ezu'
'abcdtuvwxyz' => 'zeeeutaaaaa'
It is preloaded:

const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
const consonants = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z'];
const vowels = ['a','e','i','o','u'];
P.S. You work with lowercase letters only.
*/
function replaceLetters(word) {
    let alp = alphabet.slice().reverse()
    return word.replace(/[a-z]/g,v=>{
    if (consonants.includes(v)){
      for (let i=alphabet.indexOf(v);;i++){
        if (vowels.includes(alphabet[i%26])) return alphabet[i%26]
      }
    }
    else {
      for (let i=alp.indexOf(v);;i++){
        if (consonants.includes(alp[i%26])) return alp[i%26]
      }
    }
  })
}
