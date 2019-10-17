/*
Description:
Create a function that will test a string, to see if it a URL and wrap it in a anchor tag if it is.

Example:

linkify("Test")  // "Test"
linkify("http://www.google.com") // "<a href='http://www.google.com'>http://www.google.com</a>"
*/
function linkify(input) {
    if (input.match('http')) return`<a href='${input}'>${input}</a>`
    return input
}
