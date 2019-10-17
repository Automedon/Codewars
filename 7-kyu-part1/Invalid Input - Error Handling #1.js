function getCount(words) {
  let f = typeof words === 'string';
  return {
    vowels: f ? words.replace(/[^aeiou]/gi,'').length : 0,
    consonants: f ? words.replace(/[^bcdfghjklmnpqrstvwxyz]/gi,'').length : 0
  }
}
