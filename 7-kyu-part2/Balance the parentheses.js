/*
Description:
Your job is to fix the parentheses so that all opening and closing parentheses (brackets) have matching counterparts. You will do this by appending parenthesis to the beginning or end of the string. The result should be of minimum length. Don't add unnecessary parenthesis.

The input will be a string of varying length, only containing '(' and/or ')'.

For example:

Input: ")("
Output: "()()"

Input: "))))(()("
Output: "(((())))(()())"
Enjoy!
*/
const fixParentheses = str => {
  const origStr = str;
  
  while (str.includes('()')) {
    str = str.replace(/\(\)/g, '');
  }
  
  const openingParenCount = (str.match(/\)/g) || []).length;
  const closingParenCount = (str.match(/\(/g) || []).length;
  
  return `${'('.repeat(openingParenCount)}${origStr}${')'.repeat(closingParenCount)}`;
};
