/*
Description:
Santa is coming to town and he needs your help finding out who's been naughty or nice. You will be given an entire year of JSON data following this format:

{
    January: {
        '1': 'Naughty','2': 'Naughty', ..., '31': 'Nice'
    },
    February: {
        '1': 'Nice','2': 'Naughty', ..., '28': 'Nice'
    },
    ...
    December: {
        '1': 'Nice','2': 'Nice', ..., '31': 'Naughty'
    }
}
Your function should return "Naughty!" or "Nice!" depending on the total number of occurrences in a given year (whichever one is greater). If both are equal, return "Nice!"
*/
function naughtyOrNice(data) {
  let count=0;
  for (let month in data){
  [data[month]].map(v=>Object.values(v).map(v=>v==="Naughty"?count--:count++))
  }
  return count>=0?"Nice!":"Naughty!"
}
