/*
Description:
My friend Jeremiah is very sensetive to loud noises.

People talk to Jeremiah by passing him strings, but Jeremiah will get upset if anyone shouts at him. Shouting in a string is done by typing in ALL CAPITAL LETTERS (sorry Jeremiah)! Let's write a function that returns the string if it is safe to say to Jeremiah, and an empty string if it isn't.

Jeremiah doesn't mind the occasinal capital letter - he doesn't consider it shouting unless at least an entire word is written in all capitals letters. Your solution should not filter due to one-letter words such as " I ", and should still be able to detect shouting through punctuation such as " I'M ".

For example, Jeremiah doesn't mind this string:

shoutingDetector("I'm cURIOUS what you had for breakfast, Jeremiah.")
//We would want this string to be returned by our detector.
But if you were to say:

shoutingDetector("I'M VERY angry with you, JEREMIAH!")
//We had better prevent this argument from getting to Jeremiah by returning "".
*/
function shoutingDetector(string) {
  if (
    string.split` `
      .slice()
      .some(v => v === v.toUpperCase() && !/[0-9]/.test(v) && v.length > 1)
  )
    return "";
  return string;
}
