/*
Description:
Hi there! You have to implement the

String get_column_title(int num) // syntax depends on programming language

function that takes an integer number (index of the Excel column) and returns the string represents the title of this column.

#Intro In the MS Excel lines are numbered by decimals, columns - by sets of letters.

For example, the first column has the title "A", second column - "B", 26th - "Z", 27th - "AA".

"BA"(53) comes after "AZ"(52), "AAA" comes after "ZZ".

 

Excel? Columns? More details here

#Input It takes only one argument - column decimal index number. Argument num is a natural number.

#Output Output is the upper-case string represents the title of column. It contains the English letters: A..Z

#Errors For cases num < 1 your function should throw/raise IndexError. In case of non-integer argument you should throw/raise TypeError.

In Java, you should throw Exceptions.

Nothing should be returned in Haskell.

#Examples Python, Ruby:

>>> get_column_title(52)
"AZ"
>>> get_column_title(1337)
"AYK"
>>> get_column_title(432778)
"XPEH"
>>> get_column_title()
TypeError:
>>> get_column_title("123")
TypeError:
>>> get_column_title(0)
IndexError:
JS, Java:

>>> getColumnTitle(52)
"AZ"
>>> getColumnTitle(1337)
"AYK"
>>> getColumnTitle(432778)
"XPEH"
>>> getColumnTitle()
TypeError:
>>> getColumnTitle("123")
TypeError:
>>> getColumnTitle(0)
IndexError:
#Hint The difference between the 26-digits notation and Excel columns numeration that in the first system, after "Z" there are "BA", "BB", ..., while in the Excel columns scale there is a range of 26 elements: AA, AB, ... , AZ between Z and BA.

It is as if in the decimal notation was the following order: 0, 1, 2, .., 9, 00, 01, 02, .., 09, 10, 11, .., 19, 20..29..99, 000, 001 and so on.

#Also The task is really sapid and hard. If you're stuck - write to the discussion board, there are many smart people willing to help.
*/
function getColumnTitle(num) {
  if (typeof num!=='number'||num<1) throw new Error()
  let d = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let str = ''
  while (num >= 1) {
            let rem = ~~(num % 26);
            if (rem == 0) {
                str+='Z'
                num = (num / 26) - 1;
            } else {
                str+=d[rem-1];
                num = ~~(num / 26);
            } 
        }
  return str.split``.reverse().join``
}
