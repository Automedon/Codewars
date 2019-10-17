/*
Description:
For every string, after every occurrence of 'and' and 'but', insert the substring 'apparently' directly after the occurrence.

If input does not contain 'and' or 'but', return the original string. If a blank string, return ''.

If substring 'apparently' is already directly after an 'and' and/or 'but', do not add another. (Do not add duplicates).

Examples:
Input 1

'It was great and I've never been on live television before but sometimes I don't watch this.'
Output 1

'It was great and apparently I've never been on live television before but apparently sometimes I don't watch this.'
Input 2

'but apparently'
Output 2

'but apparently' 
(no changes because 'apparently' is already directly after 'but' and there should not be a duplicate.)

An occurrence of 'and' and/or 'but' only counts when it is at least one space separated. For example 'andd' and 'bbut' do not count as occurrences, whereas 'b but' and 'and d' does count.

reference that may help: https://www.youtube.com/watch?v=rz5TGN7eUcM
*/
function apparently(string) {
   return string.replace(/(and|but\b)(?!\s+apparently\b)/g, '$1 apparently')
}
