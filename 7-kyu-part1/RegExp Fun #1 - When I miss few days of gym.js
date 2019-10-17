/*
Description:
RegExp Fun #1 - When I miss few days of gym
Disclaimer
The background story of this Kata is 100% fiction. Any resemblance to real people or real events is nothing more than a coincidence and should be regarded as such.

Background Story
You are a person who loves to go to the gym everyday with the squad of people that you've known since early childhood. However, you recently contracted a sickness that forced you to stay at home for over a week. As you see your body getting weaker and weaker every day and as you see your biceps and triceps disappearing, you can't help but lay in bed and cry. You're usually an optimistic person but this time negative thoughts come to your head ...

When I miss few days of gym

Task
As can be seen from the funny image above (or am I the only person to find the picture above hilarious?) there is lots of slang. Your task is to define a function gymSlang which accepts a string argument and does the following:

Replace all instances of "probably" to "prolly"
Replace all instances of "i am" to "i'm"
Replace all instances of "instagram" to "insta"
Replace all instances of "do not" to "don't"
Replace all instances of "going to" to "gonna"
Replace all instances of "combination" to "combo"
Your replacement regexes should be case-sensitive, only replacing the words above with slang if the detected pattern is in lowercase. However, please note that apart from 100% lowercase matches, you will also have to replace matches that are correctly capitalized (e.g. "Probably" => "Prolly" or "Instagram" => "Insta").

Finally, your code will be tested to make sure that you have used RegExp replace in your code.

Enjoy :D
*/
function gymSlang(phrase) {
  return phrase.replace(/(probably)/gi,$1=>$1[0]===$1[0].toUpperCase()?'Prolly':'prolly')
               .replace(/(i am)/gi,$1=>$1[0]===$1[0].toUpperCase()?`I'm`:`i'm`)
               .replace(/(instagram)/gi,$1=>$1[0]===$1[0].toUpperCase()?'Insta':'insta')
               .replace(/(do not)/gi,$1=>$1[0]===$1[0].toUpperCase()?`Don't`:`don't`)
               .replace(/(going to)/gi,$1=>$1[0]===$1[0].toUpperCase()?'Gonna':'gonna')
               .replace(/(combination)/gi,$1=>$1[0]===$1[0].toUpperCase()?'Combo':'combo')
}
