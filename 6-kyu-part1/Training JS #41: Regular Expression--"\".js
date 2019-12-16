/*
Description:
Training JS #41:
Regular Expression--"\"

As you can see, we only learn about usage of "" in this lesson. This lesson content will be very few? No, it's just the opposite. It's more than any other lessons.

Because its use is very wide. It can marks the next character as a special character, a multi character metacharacter, a backreference, or an octal escape.

When we learn the lessons before, there may be a question in our minds: how do we match those characters with special meanings? Such as:. * + ? | ( ) { } [ ].

There are two ways: one is to put it in the [ ]. Most of the special characters in the [ ] will lose a special meaning, only on behalf of its own. See example:

var regex=/[*+?.|()]/g;
console.log( "(a*b+c?)|(.)".match(regex) );    
//output: [ '(', '*', '+', '?', ')', '|', '(', '.', ')' ]
We can see that this regular expression is matched to the special character. But there will still be more special characters that we can't match, such as \ ^ or some nonprinting characters. Then we need to use the second way : put a \ in front of them, as the escape mark. The following is a list of some escape character:

\\   matches \
\^   matches ^
\f   matches Form-feed character.
\n   matches Newline character.
\r   matches Carriage-return character.
\t   matches Tab character.
\v   matches Vertical tab character.
The special characters we mentioned above such as . * + ? | ( ) { } [ ] can use the \ as escape characters too. Let's see a classic example, used to determine whether the brackets are symmetrical:

function isPair(s){
  var r=/\(\)|\[\]|\{\}/g;
  while (r.test(s)) s=s.replace(r,"");
  return s=="";
}
console.log( isPair("()") )     //output: true
console.log( isPair("((()))") ) //output: true
console.log( isPair("({[]})") ) //output: true
console.log( isPair("([]{})") ) //output: true
console.log( isPair(")(") )     //output: false
console.log( isPair(")()(") )   //output: false
console.log( isPair(")(") )     //output: false
console.log( isPair("({[})") )  //output: false
Its second usage is used to form a multi character metacharacter. The following is a list of usage:

\d   Matches a digit character.                    Equivalent to [0-9].
\D   Matches a nondigit character.                 Equivalent to [^0-9].
\w   Matches any letters, numbers and underscore.  Equivalent to [A-Za-z0-9_].
\W   Matches any character except lettes, numbers and underscore. 
     Equivalent to [^A-Za-z0-9_].
\s   Matches any whitespace character.             Equivalent to [\f\n\r\t\v].
\S   Matches any non-whitespace character.         Equivalent to [^\f\n\r\t\v].
\b   Matches a word boundary; that is, the position between a word and a whitespace.
\B   Matches a word non-boundary.
Each multi-character metacharacter represents a character set that can be used to simplify our regular expression. Here are some examples of previous lessons, let's see how we can simplify them:

//old example1: a function used for verify username
function verify(username){
  //return /^[a-z][a-z0-9_]{5,15}$/i.test(username);  ---original regular expression
  return /^[a-z]\w{5,15}$/i.test(username);           ---use \w
}
console.log( verify("myjinxin2015"))  //output: true
console.log( verify("smile67"))       //output: true
console.log( verify("GiacomoSorbi"))  //output: true
console.log( verify("jhoffner"))      //output: true
console.log( verify("g964") )         //output: false     username too short
console.log( verify("matt c") )       //output: false     username contains space
console.log( verify("My_name_is_ZozoFouchtra") )  //output: false   username too long
//old example2: a function used for capitalize words in string
function capIt(str){              //   ----original function
  return str.split(/ /)
            .map(s=>s.replace(/^./,x=>x.toUpperCase()))
            .join(" ")
}
function capIt(str){              //   ----use \b to matches word boundary
  return str.replace(/\b\w/g,x=>x.toUpperCase())
}
console.log( capIt("hello world!"))  //output: Hello World!
console.log( capIt("my name is John."))  //output: My Name Is John.
The 3rd and 4th usage of \ is backreference and octal escape. Their use format all are \num(num is a number with one digit or two digits). Depending on the using environment, regular expressions will judge the meaning of it.

If \num is preceded by at least num captured subexpressions, \num is a backreference. Otherwise, \num is an octal escape value(digits of num must be the octal digits(0-7)). Let's see an example of backreference:

var str="good wood food foot green glass roof";
var reg=/(.)\1/g
console.log( str.match(reg))  
//output: [ 'oo', 'oo', 'oo', 'oo', 'ee', 'ss', 'oo' ]
The regular expression in the above example matches any two identical consecutive characters. It should be noted that, if you want to using a backreference, you must define the corresponding sub expressions by using ( ). Like the example above, using only /.\1/g is wrong.

If you define more than one subexpression, \1 represents the first sub expression, \2 represents the second sub expression, and so on.

Let us look at the last example of this class, and maybe help you solve this kata:

var str="abba baab green glass roof";
var reg=/(.)(.)\2\1/g
console.log( str.match(reg))  //output: [ 'abba', 'baab' ]
Ok, lesson is over. let's us do some task.

#Task
You might have guessed the task. Yes, This time your task is to write a regular expressions matching all palindrome substring of a string. 

The rules:

1) The string contains letters, numbers, underscores and spaces. space is the separator. the substring means the whole of a substring that separated by spaces. For example:
```
"aaa bcccd" should match a substring "aaa" , 
should not match "ccc", "ccc" is a part of substring "bcccd"
```

2) Palindrome substring length range is 2-7. It means don't match the substring which length=1 or length>7.

3) A string may contain multiple palindrome substring.

4) You should not ignore case.

5) Your regular expression name should be ```regex``` and your result should be a string array.

Some examples:
```
"aa bbb cccc".match(regex)             should return [ 'aa', 'bbb', 'cccc' ]
"aaa bcccd".match(regex)               should return [ 'aaa' ]
"_x_x_ --- ~~|~~".match(regex)         should return [ '_x_x_' ]
"ABCDCBA ABABABA".match(regex)         should return [ 'ABCDCBA', 'ABABABA' ]
"121 1221 13577531 11211".match(regex) should return [ '121', '1221', '11211' ]
"aabbbcccc d".match(regex)             should return null
"1    1".match(regex)                  should return null 
"abbA CdDc".match(regex)               should return null
*/
/\b(\w)(\w)?(\w)?\w?\3\2\1\b/g
