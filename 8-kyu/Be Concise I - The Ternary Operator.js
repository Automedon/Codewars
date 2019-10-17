/*
Description:
Be Concise I - The Ternary Operator
You are given a function describeAge that takes a parameter age (which will always be a positive integer) and does the following:

If the age is 12 or lower, it return "You're a(n) kid"
If the age is anything between 13 and 17 (inclusive), it return "You're a(n) teenager"
If the age is anything between 18 and 64 (inclusive), it return "You're a(n) adult"
If the age is 65 or above, it return "You're a(n) elderly"
Your task is to shorten the code as much as possible. Note that submitting the given code will not work because there is a character limit of 137.

I'll give you a few hints:

The title itself is a hint - if you're not sure what to do, always research any terminology in this description that you have not heard of!
Don't you think the whole "You're a(n) <insert_something_here>" is very repetitive? ;) Perhaps we can shorten it?
Whatever you do, do not change what the function does. Good luck :)
*/

// TODO: Refactor and shorten the function

function describeAge(a) {
  return `You're a(n) ${
    a <= 12 ? 'kid' : a <= 17 ? 'teenager' : a <= 64 ? 'adult' : 'elderly'}`
}
