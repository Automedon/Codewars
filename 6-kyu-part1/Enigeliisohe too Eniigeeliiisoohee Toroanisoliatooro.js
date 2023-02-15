/*
Description:
Create an English to Enigeliisohe Translator, which after each consonant or semivowel inserts in lower case form the last vowel which precedes it in the alphabet.

Trivia:

Enigeliisohe is a language based on written English, and Esper' phonetics, in which each letter in written English is converted to the Esperanto name of that letter.

Most of the Esper' consonants are pronounced the same as in English, but since there are exceptions, here are some key examples how certain Esper' letter names are pronounced...

"a" is named "a", and it's name is pronounced like the "a" in "father".

"c" is named "ca", and it's name is pronounced like the "sha" in "shaman".

"e" is named "e", and it's name is pronounced like the "e" in "egg".

"g" is named "ge", and it's name is pronounced like the "ge" in "get".

"h" is named "he", and it's name is pronounced like the "he" in "help".

"i" is named "i", and it's name is pronounced like the "i" in "it".

"j" is named "ji", and it's name is pronounced as some people pronounce the "si" in "vision". In other words, like the "zh'i" in "vizh'in".

"o" is named "o", and it's name is pronounced like the "o" in "both".

"q" is named "qo", and it's name is pronounced like the "ch" in the Scottish word "loche", followed by the sound of "o" in "both". In English, one might spell such a name "kho", or "qho", to give a better idea of how it's pronounced.

"u" is named "u", and it's name is pronounced like the "oo" in "hook" or "book" or "took".

"x" is named "xu", and it's name is pronounced like the "thoo" in "thook".
Accented letters are unsupported, and therefore letters with diacritic marks, if encountered, should remain unchanged and not get a vowel attached to them.

Extra challenge: Try reading some Enigeliisohe out loud, once you have finished programming your translator. :)
*/

var toexuto = function(text) {
  const dict = {
    x: "u",
    q: "o",
    k: "i",
    z: "u",
    w: "u",
    p: "o",
    v: "u",
    m: "i",
    l: "i",
    t: "o",
    b: "a",
    g: "e",
    s: "o",
    y: "u",
    n: "i",
    h: "e",
    d: "a",
    r: "o",
    f: "e",
    c: "a",
    j: "i"
  };
  return text.replace(/./g, v => {
    if (dict[v.toLowerCase()]) {
      return v + dict[v.toLowerCase()];
    }
    return v;
  });
};
