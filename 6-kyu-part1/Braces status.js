/*
Description:
Write a function that checks the braces status in a string, and return True if all braces are properly closed, or False otherwise. Available types of brackets: (), [], {}.

Please note, you need to write this function without using regex!

Examples
"([[some](){text}here]...)"  =>  true
"{([])}"                     =>  true
"()[]{}()"                   =>  true
"(...[]...{(..())}[abc]())"  =>  true
"1239(df){"                  =>  false
"[()])"                      =>  false
")12[x]34("                  =>  false
Don't forget to rate this kata! Thanks :)
*/
const bracesStatus = s => {
  s = s.replace(/[^\(\)\[\]\{\}]/g, '');
  while (/\(\)|\[\]|\{\}/.test(s)) s = s.replace(/\(\)|\[\]|\{\}/g, '');
  return s.length < 1;
}
