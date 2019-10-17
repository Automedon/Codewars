/*
Description:
Oh no! You have stumbled upon a mysterious signal consisting of beeps of various lengths, and it is of utmost importance that you find out the secret message hidden in the beeps. There are long and short beeps, the longer ones roughly three times as long as the shorter ones. Hmm... that sounds familiar.

That's right: your job is to implement a decoder for the Morse alphabet. Rather than dealing with actual beeps, we will use a common string encoding of Morse. A long beep is represened by a dash (-) and a short beep by a dot (.). A series of long and short beeps make up a letter, and letters are separated by spaces (). Words are separated by double spaces.

You should implement the International Morse Alphabet. You need to support letters a-z and digits 0-9 as follows:

a .-      h ....    o ---     u ..-      1 .----     6 -....
b -...    i ..      p .--.    v ...-     2 ..---     7 --...
c -.-.    j .---    q --.-    w .--      3 ...--     8 ---..
d -..     k -.-     r .-.     x -..-     4 ....-     9 ----.
e .       l .-..    s ...     y -.--     5 .....     0 -----
f ..-.    m --      t -       z --..
g --.     n -.
Examples
.... . .-.. .-.. --- .-- --- .-. .-.. -.. → "hello world"

.---- ... - .- -. -.. ..--- -. -.. → "1st and 2nd"
*/
function decode(str) {
  const morse = {'1':'.----','2':'..---','3':'...--','4':'....-',5:'.....',6:'-....',7:'--...',8:'---..',9:'----.',0:'-----','a':".-", 'b':"-...", 'c':"-.-.", 'd':"-..", 'e':".", 'f':"..-.", 'g':"--.", 'h':"....", 'i':"..", 'j':".---", 'k':"-.-", 'l':".-..", 'm':"--", 'n':"-.",
   'o':"---", 'p':".--.", 'q':"--.-", 'r':".-.", 's':"...", 't':"-", 'u':"..-", 'v':"...-", 'w':".--", 'x':"-..-", 'y':"-.--", 'z':"--.."}
 const morse2={}
 for (let i in morse){
   morse2[morse[i]]=i
 }
 return str.split` `.map(v=>morse2[v]||' ').join``
}
