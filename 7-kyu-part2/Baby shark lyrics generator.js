/*
Description:
Baby Shark Lyrics
baby shark

Create a function, as short as possible, that returns this lyrics.
Your code should be less than 300 characters.

Baby shark, doo doo doo doo doo doo
Baby shark, doo doo doo doo doo doo
Baby shark, doo doo doo doo doo doo
Baby shark!
Mommy shark, doo doo doo doo doo doo
Mommy shark, doo doo doo doo doo doo
Mommy shark, doo doo doo doo doo doo
Mommy shark!
Daddy shark, doo doo doo doo doo doo
Daddy shark, doo doo doo doo doo doo
Daddy shark, doo doo doo doo doo doo
Daddy shark!
Grandma shark, doo doo doo doo doo doo
Grandma shark, doo doo doo doo doo doo
Grandma shark, doo doo doo doo doo doo
Grandma shark!
Grandpa shark, doo doo doo doo doo doo
Grandpa shark, doo doo doo doo doo doo
Grandpa shark, doo doo doo doo doo doo
Grandpa shark!
Let's go hunt, doo doo doo doo doo doo
Let's go hunt, doo doo doo doo doo doo
Let's go hunt, doo doo doo doo doo doo
Let's go hunt!
Run away,…
Good Luck!
*/
const babySharkLyrics = () => {
  const fish = [
    "Baby shark",
    "Mommy shark",
    "Daddy shark",
    "Grandma shark",
    "Grandpa shark",
    "Let's go hunt"
  ];
  let lyrics = "";
  let s = " doo".repeat(6);
  fish.map(f => {
    lyrics += `${f},${s}\n`.repeat(3) + `${f}!\n`;
  });
  lyrics += "Run away,…";
  return lyrics;
};
