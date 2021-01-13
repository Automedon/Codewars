/*
Description:
##Tabs to spaces!

Suppose that in a developer team the agreed standard is to always use spaces for alignment. Somebody from another team with whom they cooperate uses another convention and regularly checks in code containing tabs. Now all the times he changes spaces to tabs or others change his tabs to spaces that will appear as a diff in the version control system. Although most diff tools can be configured to ignore whitespace diffs, this still can be very annoying as it can add unnecessary difficulty for the comparison of different versions. So it might be worthwhile to write a script which periodically searches the codebase to convert tabs to spaces, without changing the visible code layout.
This is the goal of the kata.

In some editors, one can align words under each other with tabs in the following manner: in a common convention a tab can mean up to 4 spaces.
It can mean any number of spaces between 1 and 4.

When a tab is the 1st character in a row it means 4 spaces.
When a tab is the 2nd character in a row it means just 3 spaces.
When a tab is the 3rd character in a row it means just 2 spaces.
When a tab is the 4th character in a row it means just 1 space.
When a tab is the 5th character in a row it again means 4 spaces.
And so on...

The amount of spaces should calculated sequentially, from the leftmost tab in every line.

Write a function tabToSpaces that takes one argument, the text, and replaces every tab with spaces.
In the test cases tabs are represented by '\t' and newlines are represented by '\n'.

Example:

a   bbb (a tab equals 3 spaces)
aa  bb  (a tab equals 2 spaces)
aaa b   (a tab equals 1 space)
    b   (a tab equals 4 spaces)
*/
function tabToSpaces( text ) {
  return text.replace(/.*/mg, str => {
    let ans = "";
    for (let s of str) 
      ans += s === '\t' ? Array(5 - ans.length % 4).join(" ") : s;
    return ans;
  });
}
