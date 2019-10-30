/*
Description:
Hangman
Hangman is a paper and pencil guessing game for two or more players. One player thinks of a word, phrase or sentence and the other tries to guess it by suggesting letters, within a certain number of guesses.

Everytime the player misses a word, a part of the sketch is drawn:

Hangman

If the player finds the word before being hung he wins. He has 6 chances to miss before being hung.

Your task
You have to implement a class Hangman that receives a word in it's constructor and has the method guess, that will be used by the player to try to guess the word.

Your method guess will receive a letter as parameter and has this return behaviour:

if the player found the word: You found the word! ({word})
if the player got hung: You got hung! The word was {word}.
if the game still on: {game state}
if the game has ended already: The game has ended.
important: if the player guesses a letter that was already guessed, you should ignore it and return the {game state}

{game state}
The {game state} is the word to be found with all letters separated by white space. The letters that weren't found yet will be replaced with _ and, if the player had missed one or more letters, we will keep this record adding # to the output followed by a string with all missed letters in order of occurence.

Ex. If the player is trying to guess the word codewars and attempts with the letters d,w,u,a,c,g,s, respectively, he would guess the letters d,w,a,c,s right and miss the letters u,g. The game state at this point should look like:

c _ d _ w a _ s # ug

#Example:

let hangman = new Hangman('wars');

hangman.guess('w')
w _ _ _
hangman.guess('u')
w _ _ _ # u
hangman.guess('s')
w _ _ s # u
hangman.guess('a')
w a _ s # a
hangman.guess('r')
# You found the word! (wars)
hangman.guess('g')
# The game has ended.
*/
class Hangman {
  constructor(word) {
    this.word = word;
    this.mistakes = 0
    this.dict = word.split``.reduce((a,b)=>(a[b]=a[b]?a[b]+1:1,a),{})
    this.won = false
    this.check = word.replace(/\w/g,'_ ').trim()
    this.m = []
  }
  guess(letter) {
    if (this.won) return 'The game has ended.'
    let check = JSON.stringify(this.dict)
    for (let i in this.dict){
      if (i===letter){ this.dict[i]=0;}
    }
    if (JSON.stringify(this.dict)===check){
      let a = Object.keys(this.dict)
      if (!a.includes(letter)&&!this.m.includes(letter)){
      this.m.push(letter)
      this.mistakes++
      }
    }
    if (Object.values(this.dict).every(v=>v===0)&&!this.won){
      this.won = true
      return `You found the word! (${this.word})`
    }

    if (!this.won&&this.mistakes<7){
      this.check=this.check.split` `
      for (let i=0;i<this.check.length;i++){
        if (this.check[i]==='_'&& this.word[i]===letter) this.check[i]=letter
      }
      this.check=this.check.join` `
    if (this.mistakes>0&&this.m.length>0){
        return this.check+' # '+this.m.join``
      }
      return this.check
    }
    if (this.mistakes>=6) {
      this.won=true
      return `You got hung! The word was ${this.word}.`
    }
  }
}
