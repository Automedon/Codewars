/*
Description:
Remember the spongebob meme that is meant to make fun of people by repeating what they say in a mocking way?


You need to create a function that converts the input into this format, with the output being the same string expect there is a pattern of uppercase and lowercase letters.

Examples:

spongeMeme("stop Making spongebob Memes!") // => 'StOp mAkInG SpOnGeBoB MeMeS!'
spongeMeme("colored teens cant Be successful in tech") // =>'CoLoReD TeEnS CaNt bE SuCcEsSfUl iN TeCh'
*/
function spongeMeme(sentence) {
  return sentence
    .split("")
    .map((v, i) => (i % 2 !== 0 ? v.toLowerCase() : v.toUpperCase()))
    .join("");
}
