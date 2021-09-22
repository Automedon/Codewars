/*
Description:
Here you have a connected to a socket, and the data looks very strange. It seems to be separated by a random special character! Oh No! We need your help to find the special character, parse the data, and return it translated! There isn't much time, hurry we need your help!
*/

function wordSplitter(string){
  return string.replace(/[:+*|#&!=;%>?\'\\\/]/g,' ').split(' ')
}
