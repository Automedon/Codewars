function longestWord(str){
return str.split(' ').sort((a,b)=>a.length-b.length).slice(-1).toString()
}
