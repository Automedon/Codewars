/*
Description:
An acrostic is a text in which the first letter of each line spells out a word. It is also a quick and cheap way of writing a poem for somebody, as exemplified below :



Write a program that reads an acrostic to identify the "hidden" word. Specifically, your program will receive a list of words (reprensenting an acrostic) and will need to return a string corresponding to the word that is spelled out by taking the first letter of each word in the acrostic.
*/

function readOut(acrostic) {
  return acrostic.map(v=>v[0]).join(``)
}
