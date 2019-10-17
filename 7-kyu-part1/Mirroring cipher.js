/*
Description:
Your back at your newly acquired decrypting job for the secret organization when a new assignment comes in. Apparently the enemy has been communicating using a device they call "The Mirror".
It is a rudimentary device with encrypts the message by switching its letter with its mirror opposite (A => Z), (B => Y), (C => X) etc.

Your job is to build a method called "mirror" which will decrypt the messages. Resulting messages will be in lowercase.

To add more secrecy, you are to accept a second optional parameter, telling you which letters or characters are to be reversed; if it is not given, consider the whole alphabet as a default.

To make it a bit more clear: e.g. in case of "abcdefgh" as the second optional parameter, you replace "a" with "h", "b" with "g" etc. .

For example:

mirror("Welcome home"), "dvoxlnv slnv" //whole alphabet mirrored here
mirror("hello", "abcdefgh"), "adllo" //notice only "h" and "e" get reversed
*/

function mirror(code,list='abcdefghijklmnopqrstuvwxyz') {
  return code.toLowerCase()
             .replace(/./gi, a => list.indexOf(a) > -1 ? list[list.length - list.indexOf(a) - 1] : a)
}
