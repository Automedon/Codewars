/*
Description:
Acknowledgments:
I thank yvonne-liu for the idea and for the example tests :)

Description:
Encrypt this!

You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

Your message is a string containing space separated words.
You need to encrypt each word in the message using the following rules:
The first letter needs to be converted to its ASCII code.
The second letter needs to be switched with the last letter
Keepin' it simple: There are no special characters in input.
Examples:
encryptThis("Hello") === "72olle"
encryptThis("good") === "103doo"
encryptThis("hello world") === "104olle 119drlo"
*/

var encryptThis = function(str) {
 if(str === '') {return '';
    }else {
        let s = str.split(' ');
        let x = s.map(element => {
            let a = element.split('');
            a[0] = element.charCodeAt(0);
            [a[1], a[a.length - 1]] = [a[a.length - 1], a[1]];
            return a.join('');});
      return x.join(' ');
    }
}
