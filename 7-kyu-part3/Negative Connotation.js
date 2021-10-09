/*
Description:
You will be given a string with sets of characters, (i.e. words), seperated by between one and three spaces (inclusive).

Looking at the first letter of each word (case insensitive-"A" and "a" should be treated the same), you need to determine whether it falls into the positive/first half of the alphabet ("a"-"m") or the negative/second half ("n"-"z").

Return True/true if there are more (or equal) positive words than negative words, False/false otherwise.

"A big brown fox caught a bad rabbit" => True/true
"Xylophones can obtain Xenon." => False/false
*/

function connotation(str) {
    const pos = 'abcdefghijklm'
    let posCount = 0
    let negCount = 0
    const strSplited = str.toLowerCase().split(` `)
    for (let i = 0; i < str.length; i++) {
        if (strSplited[i] && strSplited[i][0]) {
            if (pos.includes(strSplited[i][0])) {
                posCount += 1
            } else {
                negCount += 1
            }
        }

    }
    return posCount >= negCount
}
