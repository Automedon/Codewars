/*
Task
You are implementing your own HTML editor. To make it more comfortable for developers you would like to add an auto-completion feature to it.

Given the starting HTML tag, find the appropriate end tag which your editor should propose.

Example
For startTag = "<button type='button' disabled>", the output should be "</button>";

For startTag = "<i>", the output should be "</i>".

Input/Output
[input] string startTag/start_tag

[output] a string
*/
function htmlEndTagByStartTag(startTag) {
  return `</${startTag.match(/\w+/)}>`
}
