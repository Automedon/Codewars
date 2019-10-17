/*
Description:
Training JS #40:
Regular Expression--"|", "[]" and "()""

In this lesson, we learn about "|", "[]" and "()".

"|" means or. It is used between two or more character expressions, representing a selective match. /a|b/ can match character a or b, /a|b|c/ can match one of a b and c. Let's see some examples:

var str="abc";
console.log( str.match(/a|b/g) );    //output: [ 'a', 'b' ]
console.log( str.match(/a|b|c/g) );  //output: [ 'a', 'b', 'c' ]
console.log( str.match(/ab|c/g) );   //output: [ 'ab', 'c' ]
console.log( str.match(/a|bc/g) );   //output: [ 'a', 'bc' ]
We can see that it can be used not only for a single character. In fact, every part of it is a sub expression. Like this:

var str="good wood food cat bat hat";
console.log( str.match(/good|wood|food/g) ); //output: [ 'good', 'wood', 'food' ]
console.log( str.match(/cat|bat|hat/g) );    //output: [ 'cat', 'bat', 'hat' ]
Using () can turn a regular expression into a sub expression, as part of a complex regular expression. In the example above, the matching words have similar characteristics. "good", "wood", "food" all end up with "ood", "cat", "bat", "hat" all end up with "at". We can write regular expression like this:

var str="good wood food cat bat hat";
console.log( str.match(/(g|w|f)ood/g) ); //output: [ 'good', 'wood', 'food' ]
console.log( str.match(/(c|b|h)at/g) );  //output: [ 'cat', 'bat', 'hat' ]
() and | can be nested. Like this:

var str="good wood food cat bat hat";
console.log( str.match(/((g|w|f)ood)|((c|b|h)at)/g) );
//output: [ 'good', 'wood', 'food', 'cat', 'bat', 'hat' ]
() sub expressions can be used in combination with "?" "*" "+". See example:

var str="ababcdcd";
console.log( str.match(/(ab)*/g) );    //output: [ 'abab', '', '', '', '', '' ]
console.log( str.match(/(ab)+/g) );    //output: [ 'abab' ]
console.log( str.match(/(ab)?(cd)*/g) );  //output: [ 'ab', 'abcdcd', '' ]
console.log( str.match(/(ab)?(cd)+/g) );  //output: [ 'abcdcd' ]
The following example is used to determine if a word begins with "aeiou":

function aAn(word){
  return (/^(a|e|i|o|u)/i.test(word) ? "An " : "A ") + word;
}
console.log( aAn("apple"))  //output: An apple
console.log( aAn("Apple"))  //output: An Apple
console.log( aAn("egg"))    //output: An egg
console.log( aAn("car"))    //output: A car
If we want the regular expression in the above example to be more concise, maybe we need to learn []. [] can list some characters to form a character set. The example above can be written in this way:

function aAn(word){
  return (/^[aeiou]/i.test(word) ? "An " : "A ") + word;
}
console.log( aAn("apple"))  //output: An apple
console.log( aAn("Apple"))  //output: An Apple
console.log( aAn("egg"))    //output: An egg
console.log( aAn("car"))    //output: A car
If we want to match all the numbers, [0123456789] looks a little bit longer. We can use "-" in the [] indicates the range. [0-9] match numbers 0 to 9, [a-z] matches all lowercase letters, etc.. Let's see a classic example, used to verify the user name:

//A correct user name should be: 
//1.it can use letters, digits, and underscores
//2.with a total length of 6-16 characters
//3.beginning with the letter.
function verify(username){
  return /^[a-z][a-z0-9_]{5,15}$/i.test(username);
}
console.log( verify("myjinxin2015"))  //output: true
console.log( verify("smile67"))       //output: true
console.log( verify("GiacomoSorbi"))  //output: true
console.log( verify("jhoffner"))      //output: true
console.log( verify("g964") )         //output: false     username too short
console.log( verify("matt c") )       //output: false     username contains space
console.log( verify("My_name_is_ZozoFouchtra") )  //output: false   username too long
In the example above, ^[a-z] matches a letter, [a-z0-9_]{5-15}$ matches 5-15 letters, digits, and underscores.

If "^" appears in the first position of the [], it means that to match character which outside the character set. [^a] matches all characters but a, [^0-9] matches all characters but numbers, etc.. Let's see an example:

var str="a1!b2@c3#d4$e5%";
console.log( str.replace(/[^a-z]/g,""))  //output: abcde
console.log( str.replace(/[^0-9]/g,""))  //output: 12345
console.log( str.replace(/[^!@#$%]/g,""))  //output: !@#$%
Ok, lesson is over. let's us do some task.

#Task
This time you need to write a regular expression that matches all URL contained in the string. 

The rules:

1) URL start with ```http:// or https://```

2) URL end with ```.com``` or ```.net```

3) The middle part of URL can use letters, numbers and dots

4) Need to ignore case, and a string may contain multiple URLs

5) Your regular expression name should be ```regex``` and your result should be a string array.

Some examples:
```
"http://codewars.com".match(regex)
should return [ 'http://codewars.com' ]    
"http://www.codewars.com".match(regex)
should return [ 'http://www.codewars.com' ]
"HTTP://CODEWARS.COM".match(regex)
should return [ 'HTTP://CODEWARS.COM' ]
"https://www.codewars.com".match(regex)
should return [ 'https://www.codewars.com' ]
"http://www.codewars.net".match(regex)
should return [ 'http://www.codewars.net' ]
"1234http://www.codewars.comabcd".match(regex)
should return [ 'http://www.codewars.com' ]
"http://www.codewars1.com!@#$%http://www.codewars2.net".match(regex)
should return [ 'http://www.codewars1.com', 'http://www.codewars2.net' ]
"http://www.codewars.com.net".match(regex)
should return [ 'http://www.codewars.com.net' ]
"http://www.codewars.com.fak".match(regex)
should return [ 'http://www.codewars.com' ]

These examples should return null:
"ftp://www.codewars.com".match(regex)
"http://www.code#wars.com".match(regex)
"http://wwwcodewarscom".match(regex)
"http://www.codewars.org".match(regex)
"http://www . codewars . com".match(regex)
"http://mail@codewars.com".match(regex)
```

Hint: to match ```"/"``` and ```"."```, you should use ```"\/"``` and ```"\."``` 
```"\"``` is the escape character, we will learn it in the next lesson.
*/
var regex=/(http|https):\/\/[a-z\d.]+\.(net|com)/gi
