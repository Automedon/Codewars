/*
Description:
There are many word games that can help to make our minds more agile. Many TV programs, in different countries, use them as entertainment for the audience.

Lorraine had tried to win one of them many times but she was not successful in her attempts. The TV contest is as follows:

The TV show host gives a random caller a scrambled word (that is incomprehensible) and by rearranging those letters they have to discover a word that is in the Oxford English Dictionary.
They have only 25 seconds to discover the word.
Her friend Bruce obtained the list of 2000, frequently used, English words used by the TV show.

Help Lorraine by making a function that will give her a list of all valid words that may be obtained by rearranging the scrambled word. There always be at least one valid word for each test case.

Let's see some test cases:

unscramble("shi") == ['his']

unscramble("nowk") == ['know']

unscramble("amle") == ['male', 'meal']
The list of words that Bruce obtained (keep the secret!) is named word_list, in ruby $word_list and javascript wordList. For words with more than six letters we have a challenge with speed. Try to create a suitable memoized data structure for fast hashing using the provided word_list.

Remember that all the words will correspond to U.K. English (Oxford Dictionary).
*/
function unscramble(scramble) {
    let sort=scramble.split('').sort((a,b)=>a.localeCompare(b)).join('')
    let answer=wordList.map(v=>v.split('').sort((a,b)=>a.localeCompare(b)).join(''))
    let index=[];
    answer.map((v,i)=>v==sort?index.push(i):null)
    let res=[];
    for (let i=0;i<index.length;i++){
    res.push(wordList[index[i]])
    }
    return res
}
