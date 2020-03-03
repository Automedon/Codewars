/*
Description:
You are asked to write a simple cypher that rotates every character (in range [a-zA-Z], special chars will be ignored by the cipher) by 13 chars. As an addition to the original ROT13 cipher, this cypher will also cypher numerical digits ([0-9]) with 5 chars.

Example:

"The quick brown fox jumps over the 2 lazy dogs"
will be cyphered to:

"Gur dhvpx oebja sbk whzcf bire gur 7 ynml qbtf"
Your task is to write a ROT13.5 (ROT135) method that accepts a string and encrypts it. Decrypting is performed by using the same method, but by passing the encrypted string again.

Note: when an empty string is passed, the result is also empty.

When passing your succesful algorithm, some random tests will also be applied. Have fun!
*/
function ROT135(input) {
    let alp = 'abcdefghijklmnopqrstuvwxyz'
    let ALP = alp.toUpperCase()
    let num = '0123456789'
    return input.replace(/./g,v=>{
      if (alp.includes(v)){
        let i = alp.indexOf(v)
        return  alp[(i+13)%alp.length]
      }
      if (ALP.includes(v)){
        let i = ALP.indexOf(v)
        return  ALP[(i+13)%ALP.length]
      }
      if (num.includes(v)){
        let i = num.indexOf(v)
        return  num[(i+5)%num.length]
      }
      return v
    })
}
