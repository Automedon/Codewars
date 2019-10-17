/*
Description:
Note: this is a more basic version of Romanize Russian Road Signs. Russian road signs require you to implement special rules for е and ё, Russian passports don't.

Story
You are Ivan, and you just started working at the Russian government.

Currently, when a citizen applies for a passport, a team of specialists transliterate the citizen's Cyrillic name into Latin by hand. Your assignment is to improve this, and make a program that transliterates names from Cyrillic to Latin automatically.

You should follow the rules for Russian passports (2013, ICAO), which can be found on Wikipedia.

Assignment
Make function romanize work right.

Input
A string containing the citizen's Cyrillic name cyrillic. The name will always consist of exactly two parts: a first name and a surname. The first name and the surname always start with a capital letter.

Example input: Иван Иванович

Output
A string containing the name of the citizen in Latin. The first letter of the first name and the surname should be a capital letter. If a capital Cyrillic letter transliterates into more than one Latin letters, only capitalize the first Latin letter. E.g. capital Cyrillic Щ becomes Shch.

Note that the soft sign ь has no transliteration and can thus be ignored.

Example output for example input: Ivan Ivanovich
*/
function romanize(cyrillic) {
  let dict = {
    а: "a",
    б: "b",
    в: "v",
    г: "g",
    д: "d",
    е: "e",
    ё: "e",
    ж: "zh",
    з: "z",
    и: "i",
    й: "i",
    к: "k",
    л: "l",
    м: "m",
    н: "n",
    о: "o",
    п: "p",
    р: "r",
    с: "s",
    т: "t",
    у: "u",
    ф: "f",
    х: "kh",
    ц: "ts",
    ч: "ch",
    ш: "sh",
    щ: "shch",
    ъ: "ie",
    ы: "y",
    ь: "",
    э: "e",
    ю: "iu",
    я: "ia"
  };
  let temp = cyrillic
    .toLowerCase()
    .replace(/[абвгдеёжзийклмнопрстуфхцчшщъыьэюя]/g, a => dict[a]);
  return temp.replace(/(^|\s)[a-z]/g, b => b.toUpperCase());
}
